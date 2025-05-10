import mongoose from "mongoose";

const replySchema= new mongoose.Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Reply"]
    },
    repliedid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refpath:"onModel"
    },
    user:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    content:{
        required:true,
        type:String
    },
    replies: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Reply'
        }],
    likes:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }]
})

const reply=mongoose.model("Reply",replySchema)
export default reply;