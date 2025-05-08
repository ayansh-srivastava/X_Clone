import express from 'express'
const router=express.Router()
import v1apiroutes from './v1/index.js'
router.use('/v1',v1apiroutes)
export default router