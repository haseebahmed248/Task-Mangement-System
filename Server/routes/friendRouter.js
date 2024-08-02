import express from 'express'
import { addFriend } from '../controller/friendController.js';


const friendRouter = express.Router();

friendRouter.post('/add', addFriend); 

export default friendRouter;