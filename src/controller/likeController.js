import LikeServices from "../services/likeservices.js";
const likeServices=new LikeServices

export const toggleLike=async (req,res) => {
    try {
        const data=await likeServices.toggleLike(req.body.userid,req.params.likeableid,req.query.model)
        return res.status(201).json({
            success:true,
            data:data,
            message:`like toggled successfully`,
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