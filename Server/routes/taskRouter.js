import express  from 'express'
import { addTask, getTasks } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.post('/addTask', addTask);
taskRouter.get('/getTasks/:id', getTasks);

export default taskRouter;