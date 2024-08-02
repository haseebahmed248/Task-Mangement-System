import Task from "../model/Task.js";


export const addTask = async(req,res)=>{
    try{
        const newTask = new Task({
            user: req.body.user,
            task: req.body.task,
            time: req.body.time
        });
        const task = await newTask.save();
        res.json(task);
    }catch(e){
        res.status(400).send(e);
    }
}

export const getTasks = async(req,res)=>{
    try{
        const tasks = await Task.find({user:req.params.id});
        res.json(tasks);
    }catch(e){
        res.status(400).json({e});
    }
}

export const deleteTask = async(req,res)=>{
    try{
        const task = await Task.findOneAndDelete
        ({user:req.body.user, task:req.body.task});
        res.json(task);
    }
    catch(e){
        res.status(400
            ).json({e});
    }
}

export const deleteAllTasks = async(req,res)=>{
    try{
        const task
            = await Task.findOneAndDelete
            ({user:req.body.user});
        res.json(task);
    }
    catch(e){
        res.status(400).json({e});
    }
}

export const updateTask = async(req,res)=>{
    try{
        const task = await Task.findOneAndUpdate
        ({user:req.body.user, task:req.body.task},
            {task:req.body.newTask, time:req.body.newTime});
        res.json(task);
    }
    catch(e){
        res.status(400).json({e});
    }
}

