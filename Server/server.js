import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'
import friendRouter from './routes/friendRouter.js'
import taskRouter from './routes/taskRouter.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    
    methods:['GET','POST','PUT','DELETE'],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())



mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  })





app.use("/api/users",userRouter);
app.use("/api/friends",friendRouter);
app.use('/api/task', taskRouter)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);    
})