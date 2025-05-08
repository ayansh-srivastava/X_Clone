import { PORT } from './config/serverConfig.js';
import express from 'express';
const app = express();
import {connect} from './config/database.js';
import TweetSerivices from './services/tweetservices.js';
const services=new TweetSerivices
app.listen(PORT,async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
    console.log('Connected to MongoDB');
    const tweet ={
        content: 'This is #a #tesodvwat #t_wdweet',
        ownerEmail: 'testuser@gmail.com'
    };
    await services.createTweet(tweet)
});