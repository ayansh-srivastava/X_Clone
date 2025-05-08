import Tweet from '../models/tweet.js';

export default class TweetRepo {
    async getAllTweets() {
        const tweet=await Tweet.find();
        return tweet;
    }
    async getTweetById(id) {
        const tweet = await Tweet.findById(id);
        return tweet;
    }
    async createTweet(tweetData) {
        const res= await new Tweet(tweetData).save();
        return res;
    }}