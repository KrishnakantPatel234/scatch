import {Router} from "express";
import upload from "../config/multer-config.js";
import Product from "../models/products.models.js";

const router = Router();

router.post("/create" , upload.single("image") , async (req , res)=> {
    
    try{
        const {name , price , discount , bgcolor , panelcolor , textcolor} = req.body;
        const product = await Product.create({
            image : req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        });
        
        req.flash("success" , "Product created successfully");
        res.redirect("/owners/admin");
    }catch(err){
        res.send(err.message);
    }
    
})

export default router;