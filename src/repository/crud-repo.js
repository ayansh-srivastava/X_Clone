class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            console.log(data)
            console.log(this.model)
            const res=await this.model.create(data);
            console.log("res",res)
            return res;   
        } 
        catch (error) {
            console.log("Error in crud repo");
            console.log(error)

            throw(error)
        }
    }
    async getbyid(id){
        try {
        const res=await this.model.findById(id);
        return res;   
        } 
        catch (error) {
            console.log("Error in crud repo");
            throw(error)
        }
    }
    async update(id,data){
        try {
        const res=await this.model.findByIdAndUpdate(id,data,{new:true});
        return res;   
        } 
        catch (error) {
            console.log("Error in crud repo");
            throw(error)
        }
    }
    async destroy(id){
        try {
        const res=await this.model.findByIdAndDelete(id);
        return res;   
        } 
        catch (error) {
            console.log("Error in crud repo");
            throw(error)
        }
    }
    async get(data){
        try {
        const res=await this.model.findOne(data);
        return res;   
        } 
        catch (error) {
            console.log("Error in crud repo");
            throw(error)
        }
    }
}
export default CrudRepository