import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    image : {
        type : Buffer,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    discount : {
        type : Number,
        default : 0
    },
    bgcolor : String,
    panelcolor : String,
    textcolor : String
})

const Product = mongoose.model("Product" , productSchema);
export default Product;
