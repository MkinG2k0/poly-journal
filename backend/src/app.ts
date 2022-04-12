import express, {Application} from "express";
import mongoose from 'mongoose'
import {Auth} from "./routes/auth.routes";

const config = require('config')

const app: Application = express()

app.use('/api/auth',Auth)
// app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))



const PORT = config.get('port') || 5000;

(async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'))

        app.listen(PORT, () => {
            console.log(`App has been started , port ${PORT}`)
        })

    } catch (e: any) {
        console.log('Server error', e.message)
        process.exit()
    }
})()
