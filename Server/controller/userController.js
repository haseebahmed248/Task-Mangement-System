import User from "../model/User.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
dotenv.config();


export const register = async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({  
            userId: uuidv4(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });
        const user = await newUser.save();
        res.json(user);
    }catch(e){
        res.status(400).send(e);
    }
}

export const login = async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            return res.status(404).json("User not found");
        }
        
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json("Wrong password");
        }
        const token = jwt.sign(
            { email: user.email, id: user._id, userId: user.userId },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION }
          );
      
          res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
          });
        res.status(200).json({data:user, token});
    }catch(e){
        res.status(400).send(e);
    }
}

export const home = (req, res) => {
    if (req.user) {
      // Send user information along with authentication status
      res.json({ 
        authenticated: true, 
        message: "User is authenticated",
        user: {
          id: req.user.id,
          email: req.user.email,
          userId: req.user.userId
          // Add any other user information you want to send
        }
      });
    } else {
      res.status(401).json({ authenticated: false, message: "User is not authenticated" });
    }
  }