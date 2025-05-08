import express from 'express'
const router=express.Router()
import {create} from '../../controller/tweet-controller.js'

router.post('/tweet',create)

export default router