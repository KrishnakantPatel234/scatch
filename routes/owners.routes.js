import {Router} from "express";
import Owner from "../models/owner.models.js";

const router = Router();

router.get("/admin" , (req , res)=> {
    let success = req.flash("success");
    res.render("createproducts" , {success});
})

if(process.env.NODE_ENV === "development"){
    router.post("/create" , async (req , res)=> {
        const owner = await Owner.find();

        if(owner.length > 0){
            return res.status(500).send("You are not allowed to create a new Owner.");
        }

        const {email , fullname , password} = req.body;

        const createdOwner = await Owner.create({
            fullname,
            email,
            password
        });

        res.status(201).send(createdOwner);
    })
}

export default router;