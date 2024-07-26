import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config()
import {UserRouter} from './routes/user.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use('/auth', UserRouter)
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/authentication')
app.listen(5001, () => {
    console.log("Server is running");
 })



