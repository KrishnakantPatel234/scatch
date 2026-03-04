import mongoose from "mongoose";

const ownerSchema = mongoose.Schema({
    fullname : {
        type : String,
        minLength : 3,
        trim : true
    },
    email : {
        type : String,
        trim : true,
        required : true
    },
    password : {
        type : String,
        trim : true,
        required : true
    },
    products : {
        type : Array,
        default : []
    },
    profilepic : String,
    gstin : String
})

const Owner = mongoose.model("Owner" , ownerSchema);

export default Owner;
