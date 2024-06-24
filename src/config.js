const mongoose=require("mongoose");
const connect =mongoose.connect("mongodb://localhost:27017/loginn");



connect.then(()=>{
    console.log("database is connected successfully");
})
.catch(()=>{
    console.log("database cannot be connected");
})

/*const connect1 =mongoose.connect("mongodb://localhost:27017/loginn");
connect1.then(()=>{
    console.log("database is connected successfully");
})
.catch(()=>{
    console.log("database cannot be connected");
})*/

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
/*
const userproduct=new mongoose.Schema({
    name:{
        type:String,
        required:true},
    price  :{
        type:String,
        required:true
    }





})
const collection1=new mongoose.model("product",userproduct);

module.exports=collection1; */

const collection=new mongoose.model("users",loginschema);

module.exports=collection; 