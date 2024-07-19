import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './Routes/userRoutes.js'
import mongoose from 'mongoose'
import cors from 'cors'


const app = express()
dotenv.config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true
}))

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api",userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})