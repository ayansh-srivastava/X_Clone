import mongoose from 'mongoose';
   
const tweetSchema=new mongoose.Schema({
    content: {
        type:String,
        required:true,
        max:140},
    replies: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Reply'
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }]
    },
    {Timestamp:true}
)

export default mongoose.model('Tweet',tweetSchema);
