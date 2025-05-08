import mongoose from 'mongoose';
   
const hashtagSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true,
        max:[140,"Too many characters"],
        unique:true
    },
    tweets: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }],
    },
    {timestamps:true}
    )

    export default mongoose.model('Hashtag',hashtagSchema);
