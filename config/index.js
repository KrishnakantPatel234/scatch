import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connected successfully....");
    }catch(err){
        console.log("caught an error : " , err);
        process.exit(1);
    }
};

export default connectDB;
