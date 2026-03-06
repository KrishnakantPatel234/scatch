import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const isLoggedIn = async (req , res , next) => {
    if(!req.cookies.token){
        req.flash("error" , "You need to login first");
        return res.redirect("/");
    }

    try{
        let decoded = jwt.verify(req.cookies.token , process.env.JWT_SECRET_KEY);

        let user = await User
        .findOne({email : decoded.email})
        .select("-password");

        req.user = user;

        next();
    }
    catch(err){
        req.flash("error" , "Something went wrong");
        req.redirect("/");
    }
}


export {isLoggedIn};