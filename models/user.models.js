import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    contact : Number,
    profilepic : String,
    cart : {
        type : Array,
        default : [],
    },
    orders : {
        type : Array,
        default : []
    }
})

const User = mongoose.model("User" , userSchema);
export default User;