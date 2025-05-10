import ReplyServices from "../services/replyservices.js";
const replyServices=new ReplyServices

export const createReply=async (req,res) => {
    try {
        const data=await replyServices.create(req.body.user,req.params.repliedid,req.query.model,req.body.content)
        return res.status(201).json({
            success:true,
            data:data,
            message:`Replied successfully`,
            error:{}
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            data:{},
            message:`Something went wrong`,
            error:error
        })
    }
}
