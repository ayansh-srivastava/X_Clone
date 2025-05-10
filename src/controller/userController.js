import UserServices from '../services/userservices.js'
const userServices=new UserServices

export const createUser = async (req,res) => {
    try {
        const data=await userServices.createUser({
            email:req.body.email,
            userid:req.body.userid,
            password:req.body.password,
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
