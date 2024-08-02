import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'
import friendRouter from './routes/friendRouter.js'
import taskRouter from './routes/taskRouter.js'
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  })





app.use("/api",userRouter);
app.use("/api/friends",friendRouter);
app.use('/api/task', taskRouter)



app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);    
})