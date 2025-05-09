import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repo.js';

export default class TweetRepo extends CrudRepository{
    constructor(){
        super(Tweet)
    }
    async getAllTweets() {
        const tweet=await Tweet.find();
        return tweet;
    }
    async getTweetById(id) {
        const tweet = await Tweet.findById(id);
        return tweet;
    }
    async getTweetWithLikes(id){
        return await Tweet.findById(id).populate("likes")
    }
    async createTweet(tweetData) {
        const res= await new Tweet(tweetData).save();
        return res;
    }}