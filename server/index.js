import express from 'express'
import dotenv from "dotenv"
import connection from './DB/connection.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import UserRoutes from './routes/user.js'
import VideoRoutes from './routes/video.js'
import AuthRoutes from './routes/auth.js'
import CommentRoutes from './routes/comment.js'

const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
dotenv.config()

await connection();
app.use(cors())
app.use("/api/v1/auth",AuthRoutes)
app.use("/api/v1/users",UserRoutes)
app.use("/api/v1/videos",VideoRoutes)
app.use("/api/v1/comments",CommentRoutes)

app.listen(process.env.PORT ,()=>{
    console.log("App is running on port 4000")
})