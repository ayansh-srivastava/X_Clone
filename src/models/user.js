import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validator:isEmail
        },
    userid:{
        type:String,
        required:true,
    },
    password:{
        required:true,
        type:String,
    }
})

const user=mongoose.model("User",userSchema)
export default user;