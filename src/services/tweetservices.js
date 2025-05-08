import {TweetRepo,HashtagRepo} from '../repository/index.js'

const tweetRepo=new TweetRepo
const hashtagRepo=new HashtagRepo

export default class TweetServices{
    async createTweet(data) {
        try {
            const content=data.content;
            let tags=content.match(/#[a-z0-9A-Z_]+/g)
            const tweet= await tweetRepo.createTweet(data);
            if(tags){            
                        tags=tags.map((tag)=>tag.substring(1).toLowerCase())
                        const alreadyPresent = await hashtagRepo.find(tags)
                        const titletag=alreadyPresent.map(data=>data.title)
                        const notPresent=tags.filter((tag)=>!titletag.includes(tag))
                        const hashtags=notPresent.map((tag)=>{
                            return {title:tag,tweets:[tweet.id]}})
                        await hashtagRepo.bulkcreate(hashtags)
                        alreadyPresent.forEach((tag)=>{
                            tag.tweets.push(tweet.id)
                            tag.save()})
            }
            return tweet;   
        } catch (error) {
            console.log(error)
        }
    }

}

