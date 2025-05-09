import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
        validator:isEmail,
        message:"Enter correct email"}
        },
    userid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
})

const user=mongoose.model("User",userSchema)
export default user;