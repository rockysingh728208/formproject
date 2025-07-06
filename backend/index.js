import express from "express";
import cors from "cors";
import {connectDb}  from "./config/db.js";
import userRoutes from './routes/userRoutes.js'


const app=express();
const port=4000;
app.use(cors());
app.use(express.json());
// api end points
connectDb();

app.use('/api/userss', userRoutes)

app.get("/",(req,res)=>{
    res.send("Api working")
});
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

