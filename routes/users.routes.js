import {Router} from "express";
import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.js";

// controllers
import { logout, registerUser , loginUser } from "../controllers/auth.controllers.js";

const router = Router();

router.get("/" , (req , res)=> {
    res.send("Hey , it's working");
})

router.post("/register" , registerUser );

router.post("/login" , loginUser);

router.get("/logout" , logout);

export default router;