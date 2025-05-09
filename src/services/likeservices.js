import { LikeRepository , TweetRepo} from "../repository/index.js";
const likeRepository=new LikeRepository
const tweetRepository=new TweetRepo


class LikeServices{
    
    async toggleLike(userid,likeableid,model){
        var likedobject;
        if(model=="Tweet"){
            likedobject=await tweetRepository.getTweetWithLikes(likeableid)
        }
        else if(model=="Comment"){
            //TODO
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
