import {  TweetRepo,ReplyRepository} from "../repository/index.js";
const tweetRepository=new TweetRepo
const replyRepository=new ReplyRepository

class ReplyServices{
    
    async create(userid,repliedid,model,content){
        var repliedobject;
        if(model=="Reply"){
            repliedobject=await replyRepository.getbyid(repliedid)
        }
        else if(model=="Tweet"){
            repliedobject=await tweetRepository.getTweetById(repliedid)
        }
        else{
            throw new Error("Invalid object")
        }

        const newReply = await replyRepository.create({
            user: userid,
            onModel: model,
            repliedid: repliedid,
            content:content
        });

        repliedobject.replies.push(newReply);
        await repliedobject.save();
        return newReply;
}

}
export default ReplyServices
