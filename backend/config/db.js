import mongoose from "mongoose";
export const connectDb=async()=>{
    try {
        await mongoose.connect('mongodb+srv://ruhi7061:ruhi70@cluster0.ascakek.mongodb.net')
        console.log("MongoDb connected successfully")
    } catch (error) {
        console.log(error)
    }
}


