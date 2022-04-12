import {Request, Response} from "express";
import {Router} from "express";
import {Link} from "../models/Link";
import {auth_middleware} from "../middleware/auth.midleware";
const config = require('config')
const shortid = require('shortid')

const router = Router()

router.post('/generate', auth_middleware, async (req:Request<any>, res:Response) => {
	try {
		const baseUrl = config.get('baseUrl')

		const {from} = req.body

		const code = shortid.generate()

		const existing = await Link.findOne({from})

		if (existing) return res.json({link: existing})

		const to = baseUrl + '/t/' + code

		const link = new Link({
			// code, to, from, owner: req.user.userId
		})

		await link.save()

		res.status(201).json({link})

	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

router.get('/', auth_middleware, async (req:Request<any>, res:Response) => {
	try {
		const links = await Link.find({
			// owner: req.user.userId
		})

		res.json(links)
	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

router.get('/:id', auth_middleware, async (req:Request<any>, res:Response) => {
	try {
		const link = await Link.findById(req.params.id)

		res.json(link)
	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

module.exports = router