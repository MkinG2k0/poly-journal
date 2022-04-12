import {Request,Response,Router} from "express";
const Link = require('../models/Link')
const router = Router()

router.get('/:code', async (req:Request, res:Response) => {
	try {
		const link = await Link.findOne({code: req.params.code})

		if (!link) res.status(404).json({message: 'Что то не так'})

		link.clicks++
		await link.save()

		return res.redirect(link.from)

	} catch (e:any) {
		res.status(500).json({message: 'Что то не так ' + e.message})
	}
})

module.exports = router
