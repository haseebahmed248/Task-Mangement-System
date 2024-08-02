import Notification from "../model/Notification.js";

export const addNotification = async(req,res)=>{
    try{
        const newNotification = new Notification({
            user: req.body.user,
            notification: req.body.notification
        });
        const notification = await newNotification.save();
        res.json(notification);
    }catch(e){
        res.status(400).send(e);
    }
}

export const getNotifications = async(req,res)=>{
    try{
        const notifications = await Notification.find({user:req.params.id});
        res.json(notifications);
    }catch(e){
        res.status(400).json({e});
    }
}

export const deleteNotification = async(req,res)=>{
    try{
        const notification = await Notification.findOneAndDelete
        ({user:req.body.user, notification:req.body.notification});
        res.json(notification);
    }
    catch(e){
        res.status(400
            ).json({e});
    }
}

export const deleteAllNotifications = async(req,res)=>{
    try{
        const notification = await Notification.findOneAndDelete
        ({user:req.body.user});
        res.json(notification);
    }
    catch(e){
        res.status(400).json({e});
    }
}

export const updateNotification = async(req,res)=>{
    try{
        const notification = await Notification.findOneAndUpdate
        ({user:req.body.user, notification:req.body.notification},
            {notification:req.body.newNotification});
        res.json(notification);
    }
    catch(e){
        res.status(400).json({e});
    }
}

