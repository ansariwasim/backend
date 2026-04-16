import mongoose from "mongoose";
import {DB_NAME} from "../constants";

const connectDB = async () => {
    
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB conneted !! DB Host: ${connectionInstance.connection.host}`)

    }catch(error){
     
        console.log("MONGODB connection error", error);
        process.exit(1) // stop the app id db is down
    }
}

export default connectDB;