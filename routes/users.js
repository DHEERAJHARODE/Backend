const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Dheeraj:Dheeraj2003@firstcluster.ykspvhd.mongodb.net/?retryWrites=true&w=majority&appName=Firstcluster");
const data=mongoose.Schema({
  name:String,
  enail:String
});
module.exports=mongoose.model("useradata",data);