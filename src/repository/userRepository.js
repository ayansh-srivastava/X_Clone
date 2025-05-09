import user from "../models/user.js";
import CrudRepository from "./crud-repo.js";

class UserRepository extends CrudRepository{
    constructor(){
        super(user)
    }
}
export default UserRepository