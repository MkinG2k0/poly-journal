import {Request, Response} from "express";
import {Router} from "express/ts4.0";
import {Link} from "../models/Link";
const config = require('config')
const auth = require('../middleware/auth.midleware')
const shortid = require('shortid')
const router = Router()

router.post('/generate', auth, async (req:Request<{user:any}>, res:Response) => {
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

router.get('/', auth, async (req, res) => {
	try {
		const links = await Link.find({
			// owner: req.user.userId
		})

		res.json(links)
	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

router.get('/:id', auth, async (req, res) => {
	try {
		const link = await Link.findById(req.params.id)

		res.json(link)
	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

module.exports = router