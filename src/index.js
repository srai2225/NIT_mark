const express=require('express');
const path=require("path");
const bcrypt=require("bcrypt");
const collection=require("./config");
const session=require('express-session');
const  flash=require('connect-flash');
var nodemailer = require('nodemailer');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');

app.use(express.static("public"));
app.use("/", express.static(__dirname + "/sty"));

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'garvv673@gmail.com',
      pass: 'raim mnxf xavo slch'
    }
  });
  
 

 
app.use(session({
secret:'webslesson',
cookie:{max:60000},
saveUninitialized:false,
resave:false

}));



app.get("/login",(req,res)=>{
    res.render("login");
});
app.get("/signup",(req,res)=>{
    res.render("signup");
});


 
app.post("/signup",async (req,res)=>{


    try{

    const data={
        name:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phone:req.body.phone
    }
const existinguser=await collection.findOne({name:data.name});
if(existinguser){
   
    res.send("User already exists.please choose a different username.");
 
}
else{
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(data.password,salt);
data.password=hashedPassword;
console.log("hashed password:" + data.password);

    const userdata=await collection.insertMany(data);
    console.log(userdata);
    
   // res.send("User registered successfully");
   var mailOptions = {
    from: 'garvv673@gmail.com',
    to: data.email,
    subject: 'message from NITMART',
    text: 'WELCOME !!!! to the NITMART ,hope you enjoy the experience'
  };


   transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
 // req.flash('message','welcome back');
   res.render('home');

  
} 
    }
 catch (error) {
    console.error(error); 
    res.status(400).send("Validation error: " + error.message); 
}
})


app.post("/login",async (req,res)=>{
    try{
        const check=await collection.findOne({name:req.body.username});
        if( !check){
            res.send("User name cannot found");
        }
       
        const ispassword=  await bcrypt.compare(req.body.password, check.password);
        if(ispassword){
          //  req.flash('message','welcome back');
            res.render('home');
        }else{
            res.send("wrong password");
        }
    }catch(err){
        console.log(err);
        res.send("Wrong details");
    }
})

const port = 9000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})

