import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

const registerUser =  async (req , res) =>{
    try{
        const {email , password , username , fullname} = req.body;

        let user = await User.findOne({email});

        if(user){
            return res.status(409).send("You already have an account , please login.");
        }

        const hashedPass = await bcrypt.hash(password , 12)
        user = await User.create({
            fullname,
            username,
            email,
            password : hashedPass
        });

        let token = generateToken(user);

        res.cookie("token" , token);
        return res
            .status(201)
            .json({message : "User registered successfully" , user});
    }catch(err){
        res.send(err.message);
    }

}

const loginUser =  async (req , res) =>{
    try{
        const {email , password} = req.body;

        let user = await User.findOne({email});

        if(!user){
            return res.status(401).send("email or password incorrect.");
        }

        let isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
            return res.status(401).send("email or password incorrect.")
        }

        let token = generateToken(user);

        res.cookie("token" , token);
        return res
            .status(201)
            .json({message : "User logged In successfully" , user});
    }catch(err){
        res.status(500).send(err.message);
    }

}

export {
    registerUser,
    loginUser
}