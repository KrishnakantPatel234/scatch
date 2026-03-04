import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// routes
import OwnersRouter from "./routes/owners.routes.js"
import UsersRouter from "./routes/users.routes.js"
import ProductsRouter from "./routes/products.routes.js"
import connectDB from "./config/index.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
dotenv.config();
connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));

app.set("view engine" , "ejs");

app.use("/owners" , OwnersRouter);
app.use("/products" , ProductsRouter);
app.use("/users" , UsersRouter);

app.listen(PORT , ()=> {
    console.log(`App listening on port ${PORT}`);
})