import mongoose from 'mongoose';   
const CommentSchema=new mongoose.Schema({
    content: {
        type:String,
        required:true},
    ownerEmail: {
        type:String,
        required:true,
        validate: [ isEmail, 'invalid email' ]
    },
    },
    {Timestamp:true}
)

export const Comment=mongoose.model('Comment',CommentSchema);
