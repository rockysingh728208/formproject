import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://anu7061:anu70@cluster3.op1xkrd.mongodb.net')
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log(error)
    }
}


