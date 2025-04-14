const {PORT}=require(`./config/serverConfig`)
const express = require('express');
const app = express();
const {connect}=require('./config/database')
const Tweet=require('./models/tweet')
app.listen(PORT,async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
    console.log('Connected to MongoDB');
    const tweet = new Tweet({
        content: 'This is a test tweet',
        ownerEmail: 'testuser@gmail.com'
    });
    await tweet.save();
});