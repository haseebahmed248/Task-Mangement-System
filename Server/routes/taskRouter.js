import express  from 'express'
import { addTask } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', addTask);

export default taskRouter;