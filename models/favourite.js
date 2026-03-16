const mongooes = require("mongoose")
const fovouriteSchema = mongooes.Schema({
  houseId:{
    type: mongooes.Schema.Types.ObjectId,
    ref:"Home",
    require:true,
    unique:true
  }
});

module.exports = mongooes.model("Favourite",fovouriteSchema)