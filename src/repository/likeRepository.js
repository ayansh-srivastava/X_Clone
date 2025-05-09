import like from "../models/like.js";
import CrudRepository from "./crud-repo.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(like)
    }
}
export default LikeRepository;