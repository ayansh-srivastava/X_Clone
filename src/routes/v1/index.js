import express from 'express'
const router=express.Router()

import {createTweet} from '../../controller/tweet-controller.js'
import {toggleLike} from "../../controller/likeController.js"
import {createReply} from "../../controller/replyController.js"
import { createUser } from '../../controller/userController.js'

router.post('/tweet',createTweet)
router.post('/reply/:repliedid',createReply)
router.post('/like/:likeableid',toggleLike)
router.post('/signup',createUser)
export default router