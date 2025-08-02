import { log } from "console";
import mongoose from "mongoose";

const ConnectDb=async ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('database connect');
        
    } catch (error) {
       console.log("mongo connection error:",error);
          
    }
}

export default ConnectDb;