import mongoose from 'mongoose';
   
const tweetSchema=new mongoose.Schema({
    content: {
        type:String,
        required:true,
        max:140},
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    },
    {Timestamp:true}
)

export default mongoose.model('Tweet',tweetSchema);
