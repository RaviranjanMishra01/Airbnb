const mongoose = require("mongoose");
const favourite = require("./favourite");

const HomeSchema =   mongoose.Schema({
  houseName:{
    type:String,
    require:true
  },
  price:{
    type: String,
    require:true
  },
  location:{
    type: String,
    require: true
  },
  rating:{
    type:Number,
    require:true
  },
  photoUrl: String,
  description: String,
});

HomeSchema.pre("findOneAndDelete",async function(next){
  const homeId = this.getQuery()["_id"];
  await favourite.deletemany({homeId:homeId});
  next();
});
module.exports = mongoose.model("Home",HomeSchema)