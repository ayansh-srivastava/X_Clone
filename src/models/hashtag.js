import mongoose from 'mongoose';
   
const hashtagSchema=new mongoose.Schema({
    title: {
        type:String,
        required:true,
        max:[140,"Too many characters"],
        index:true
    },
    tweets: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }],
    },
    )

    export default mongoose.model('Hashtag',hashtagSchema);
