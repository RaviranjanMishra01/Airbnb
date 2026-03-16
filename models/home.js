const { Result } = require("postcss");
// const { get } = require("../routes/storeRouter");
const {Getdb} = require("../utils/databaseUtil");
const { ObjectId } = require("mongodb");
// const { getdb } = require("../utils/databaseUtil");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, _id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    if(_id){
      this._id = _id;
    }
  }

  save() {
    const db = Getdb();
    if(this._id){
      const updatefields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating:this.rating,
        photoUrl:this.photoUrl,
        description:this.description
      }
      return db.collection("homes").updateOne({_id: new ObjectId(String(this._id))},{$set: updatefields})
    }else{
      return db.collection("homes").insertOne(this)
    }
  }

  static fetchAll() {
    const db = Getdb();
    return db.collection("homes").find().toArray().then((homes)=>{
      console.log(homes);
      return homes;
    }).catch((err)=>{
      console.log(err)
    });
  }

  static findById(homeId) {
    console.log(homeId)
    const db = Getdb();
    return db.collection("homes").find({_id: new ObjectId(String(homeId))}).next();
  }

  static deleteById(homeId) {
    console.log(homeId)
    const db = Getdb();
    return db.collection("homes").deleteOne({_id: new ObjectId(String(homeId))});
  }
};
