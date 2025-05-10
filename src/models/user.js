import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from 'bcrypt'
const saltRounds=10
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
userSchema.pre('save',async function(next) {
    const user=this
    console.log(user)
    console.log(saltRounds)
    if (user.password) {
      user.password =await bcrypt.hash(user.password, saltRounds);
    }
    next();
});

const user=mongoose.model("User",userSchema)
export default user;