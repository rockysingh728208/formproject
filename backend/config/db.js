import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://chandan7061:chandan70@cluster0.agewmvu.mongodb.net')
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log(error)
    }
}


