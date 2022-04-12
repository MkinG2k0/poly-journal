import {Request, Response, Router} from "express";
import {User} from '../models/User'

const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')

export const Auth = Router()

// /api/auth/register
Auth.post(
    '/register',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6}),
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(), message: 'Некорректные данные при регистрации'
                })
            }

            // Needed body
            const {email,password} = req.query

            // const candidate = await User.findOne({email})

            const candidate = await User.findOne({email})

            if (candidate) return res.status(400).json({message: 'Такой пользователь уже сущ.'})

            const hashedPassword = await bcrypt.hash(password, 12)

            const user = new User({email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: 'Пользователь создан'})

        } catch (e: any) {
            res.status(500).json({message: 'Что то не так ' + e.message})
        }
    })

// /api/auth/login
Auth.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists(),
    ],
    async (req: Request, res: Response) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(), message: 'Некорректные данные при входе'
                })
            }

            const {email,password} = req.query

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный пароль'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )

            res.json({token, userId: user.id})


        } catch (e) {
            res.status(500).json({message: 'Что то не так '})
        }
    })

