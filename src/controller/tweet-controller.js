import services from '../services/tweetservices.js'
const TweetSerivices=new services

export const createTweet = async (req,res) => {
    try {
        const data=await TweetSerivices.createTweet({
            content:req.body.content,
            replies:[]
        })
        return res.status(201).json({
            success:true,
            data:data,
            error:{}
        })
    } catch (error) {
        
        return res.status(404).json({
            success:false,
            data:{},
            error:error
        })
    }
}
