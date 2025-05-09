import mongoose from "mongoose";

const likeSchema= new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]
    },
    likable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refpath:"onModel"
    },
    user:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const like=mongoose.model("Like",likeSchema)
export default like;