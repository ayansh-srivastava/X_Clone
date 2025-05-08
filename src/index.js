import { PORT } from './config/serverConfig.js';
import express from 'express';
const app = express();
import {connect} from './config/database.js';
import router from './routes/index.js'
import bodyparser from 'body-parser'
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/api',router)

app.listen(PORT,async () => {
    console.log(`Server running on port ${PORT}`);
    await connect();
    console.log('Connected to MongoDB');
});