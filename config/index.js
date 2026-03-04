import mongoose from "mongoose";
import debug from "debug";
import config from "config";

const dblog = debug("development:mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(`${config.get("MONGODB_URI")}/scatch-db`);

        dblog("mongodb connected successfully....");
        console.log("connectDB function running");
    }catch(err){
        dblog("MongoDB connection error: %O", err);
        process.exit(1);
    }
};

export default connectDB;

// USING DOTENV

// import mongoose from "mongoose";

// const connectDB = async () => {
//     try{
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("mongodb connected successfully....");
//     }catch(err){
//         console.log("caught an error : " , err);
//         process.exit(1);
//     }
// };

// export default connectDB;
