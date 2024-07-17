const mongoose=require("mongoose");
const connect =mongoose.connect("mongodb://127.0.0.1:27017/loginn");



connect.then(()=>{
    console.log("database is connected successfully");
})
.catch((err)=>{
    console.log(err + "database cannot be connected");
})


const loginschema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
phone:{
    type:String,
    required:true
}
});

const collection=new mongoose.model("users",loginschema);

module.exports=collection; 