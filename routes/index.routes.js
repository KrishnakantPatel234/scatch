import { Router } from "express";
import { isLoggedIn } from "../middlewares/isLoggedIn.middlewares.js";
import Product  from "../models/products.models.js";

const router = Router();

router.get("/" , (req , res) => {
    let error = req.flash("error");
    res.render("index" , {error});
})

router.get("/shop" , isLoggedIn , async (req , res) => {
    let products = await Product.find();
    res.render("shop", { products });
})

export default router;