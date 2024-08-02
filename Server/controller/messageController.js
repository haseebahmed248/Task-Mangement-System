import Message from "../model/Message.js";

export const addMessage = async(req,res)=>{
    try{
        const newMessage = new Message({
            from: req.body.from,
            to: req.body.to,
            message: req.body.message,
            time: req.body.time
        });
        const message = await newMessage.save();
        res.json(message);
    }catch(e){
        res.status(400).send(e);
    }
}

export const getMessages = async(req,res)=>{
    try{
        const messages = await Message.find({from:req.params.from, to:req.params.to});
        res.json(messages);
    }catch(e){
        res.status(400).json({e});
    }
}

export const deleteMessage = async(req,res)=>{
    try{
        const message = await Message.findOneAndDelete
        ({from:req.body.from, to:req.body.to, message:req.body.message});
        res.json(message);
    }
    catch(e){
        res.status(400
            ).json({e});
    }
}

export const deleteAllMessages = async(req,res)=>{
    try{
        const message 
        = await Message.deleteMany({from:req.body.from, to:req.body.to});
        res.json(message);
    }
    catch(e){
        res.status(400).json({e});
    }
}

export const updateMessage = async(req,res)=>{
    try{
        const message = await
        Message.findOneAndUpdate
        ({from:req.body.from, to:req.body.to, message:req.body.message},
            {message:req.body.newMessage});
        res.json(message);
    }
    catch(e){
        res.status(400).json({e});
    }
}



