const mongoose=require(`mongoose`)   
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

const Comment=mongoose.model('Comment',CommentSchema);
module.exports=Comment