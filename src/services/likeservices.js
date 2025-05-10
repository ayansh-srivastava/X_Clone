import { LikeRepository , ReplyRepository, TweetRepo} from "../repository/index.js";
const likeRepository=new LikeRepository
const tweetRepository=new TweetRepo
const replyRepository=new ReplyRepository

class LikeServices{
    
    async toggleLike(userid,likeableid,model){
        var likedobject;
        if(model=="Tweet"){
            likedobject=await tweetRepository.getTweetWithLikes(likeableid)
        }
        else if(model=="Reply"){
            likedobject=await replyRepository.getbyid(likeableid)
        }
        else{
            throw new Error("Invalid object")
        }
        const exist= await likeRepository.get({
            onModel:model,
            likable:likeableid,
            user:userid})
        if(exist) {
            likedobject.likes.pull(exist.id);
            await likedobject.save();
            await exist.deleteOne();
            var isAdded = false;

        } else {
            const newLike = await likeRepository.create({
                user: userid,
                onModel: model,
                likable: likeableid
            });
            likedobject.likes.push(newLike);
            await likedobject.save();
            var isAdded=true;
    }
    return isAdded;
}

}
export default LikeServices
