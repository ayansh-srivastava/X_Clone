import reply from "../models/reply.js";
import CrudRepository from "./crud-repo.js";

class ReplyRepository extends CrudRepository{
    constructor(){
        super(reply)
    }
}
export default ReplyRepository;