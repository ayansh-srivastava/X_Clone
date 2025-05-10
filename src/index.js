import { PORT } from './config/serverConfig.js';
import express from 'express';
const app = express();
import {connect} from './config/database.js';
import router from './routes/index.js'
import bodyparser from 'body-parser'
import UserRepository from './repository/userRepository.js';
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/api',router)
import LikeServices from './services/likeservices.js';
app.listen(PORT,async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
    console.log('Connected to MongoDB');
    // const userRepository=new UserRepository
    // await userRepository.create({
    //     email:"hello@gmail.com",
    //     password:"VDEDSSDFVS",
    //     userid:"helloworld"
    // })
    // const likeServices=new LikeServices;
    // likeServices.toggleLike("681e08f88a02064126537afc",
    //     "681e0783b4b5504048f72ee1",
    //     "Tweet"
    // )
});