import { UserRepository } from "../repository/index.js";
const userRepository=new UserRepository

class UserServices{
    async createUser(data){
        try {
            const user=await userRepository.create(data);
            return user;
        } catch (error) {
            throw(error)
        }
    }
}
export default UserServices