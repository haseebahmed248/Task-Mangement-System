import Friends from "../model/Friends.js";

export const addFriend = async(req,res)=>{
    try{
        const newFriend = new Friends({
            user: req.body.user,
            friends: req.body.friends
        });
        const friend = await newFriend.save();
        res.json(friend);
    }catch(e){
        res.status(400).send(e);
    }
}

export const getFriends = async(req,res)=>{
    try{
        const friends = await Friends.find({user:req.params.id});
        res.json(friends);
    }catch(e){
        res.status(400).json({e});
    }
}

export const deleteFriend = async(req,res)=>{
    try{
        const friend = await Friends.findOneAndDelete
        ({user:req.body.user, friends:req.body.friends});
        res.json(friend);
    }
    catch(e){
        res.status(400
            ).json({e});
    }
}

export const deleteAllFriends = async(req,res)=>{
    try{
        const friend = await Friends.findOneAndDelete
        ({user:req.body.user});
        res.json(friend);
    }
    catch(e){
        res.status(400).json({e});
    }
}

export const updateFriend = async(req,res)=>{
    try{
        const friend = await Friends.findOneAndUpdate
        ({user:req.body.user, friends:req.body.friends},
            {friends:req.body.newFriends});
        res.json(friend);
    }
    catch(e){
        res.status(400).json({e});
    }
}