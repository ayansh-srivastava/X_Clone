import Hashtag from '../models/hashtag.js';

export default class HashtagRepo {
    async getHashtagById(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
            
        } catch (error) {
            console.log(error)
        }
    }
    async getHashtagByName(name) {
        try {
            const hashtag = await Hashtag.findOne({title:name});
            return hashtag;
        } catch (error) {
            console.log(error)
        }
    }
    async create(data) {
        try {
            const res= await new Hashtag(data).save();
            return res;    
        } catch (error) {
            console.log(error)
        }
    }
    async bulkcreate(data){
        try {
            const res= await Hashtag.insertMany(data);
            return res
        } catch (error) {
            console.log(error)
        }
    }
    async destroy(id){
        try {
            const res=await Hashtag.findByIdAndDelete(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    async update(id){
        try {
            const res=await Hashtag.findByIdAndUpdate(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }
    async find(data){
        try {
            const res=await Hashtag.find({title:data})
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}
