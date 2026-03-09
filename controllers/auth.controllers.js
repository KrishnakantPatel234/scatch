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
            req.flash("error", "Email or password incorrect");
            return res.redirect("/");   
        }

        let isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
             req.flash("error", "Email or password incorrect");
            return res.redirect("/");
        }

        let token = generateToken(user);

        res.cookie("token" , token);
        res.redirect("/shop");
    }catch(err){
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }

}

const logout = (req , res) => {
    res.cookie("token" , "");
    res.redirect("/");
}

export {
    registerUser,
    loginUser,
    logout
}