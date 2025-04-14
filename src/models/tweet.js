const mongoose=require(`mongoose`)
const { isEmail } = require('validator');
   
const tweetSchema=new mongoose.Schema({
    content: {
        type:String,
        required:true},
    ownerEmail: {
        type:String,
        required:true,
        validate: [ isEmail, 'invalid email' ]
    },
    comments: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
    },
    {Timestamp:true}
)

const Tweet=mongoose.model('Tweet',tweetSchema);
module.exports=Tweet