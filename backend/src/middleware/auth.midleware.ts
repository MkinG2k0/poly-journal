import jwt from "jsonwebtoken";

const config = require('config')

import {Request,Response,NextFunction} from "express";

export const auth_middleware =  (req:Request<{
	id: number;
},{asd:string}>, res:Response, next:NextFunction) => {
	if (req.method === 'OPTIONS') {
		return next()
	}
	try {
		const token = req.headers.authorization?.split(' ')[1]

		if (!token) return res.status(401).json({message: 'Не авторизован'})

		// !req.user было

		req.body.user = jwt.verify(token, config.get('jwtSecret'))

		next()
	} catch (e) {
		return res.status(401).json({message: 'Не авторизован'})
	}
}