const mongoFunctions = require( './data/mongoFunctions');
const bodyParser = require("body-parser");

var express = require('express');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3005,()=>{
    console.log("The App is now running")
})

app.use('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
  });

app.get("/",async(req,res)=>{
    console.log("HIT IN THE / ROUTE")
    let courses = await mongoFunctions.getAllCourses();
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.get("/getEvents",async(req,res)=>{
    console.log("HIT IN THE /getEvents ROUTE")
    let courses = await mongoFunctions.getAllEvents();
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.get("/getQuacks",async(req,res)=>{
    console.log("HIT IN THE /getEvents ROUTE")
    let courses = await mongoFunctions.getAllQuacks();
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.get("/getClubs",async(req,res)=>{
    console.log("HIT IN THE /getClubs ROUTE")
    let courses = await mongoFunctions.getAllClubs();
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.get("/getArticles",async(req,res)=>{
    console.log("HIT IN THE /getArticles ROUTE")
    let courses = await mongoFunctions.getAllArticles();
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.get("/getPostInformation/:id",async(req,res)=>{
    console.log("HIT IN THE /getPostInformation ROUTE", req.params.id)
    let courses = await mongoFunctions.getPostInformation(req.params.id);
    console.log("Sending back reply : ", courses) 
    res.json({"courses": courses})
})

app.post("/vote/increment",async(req,res)=>{
    console.log("HIT IN THE /increment ROUTE", req.body)
    await mongoFunctions.increment(req.body.id);
    res.status(200).json({})
})

app.post("/vote/decrement",async(req,res)=>{
    console.log("HIT IN THE /increment ROUTE", req.body)
    await mongoFunctions.decrement(req.body.id);
    
    res.status(200).json({})
})

app.post("/addComment",async(req,res)=>{
    console.log("HIT IN THE /addComment ROUTE", req.body)
    await mongoFunctions.addComment(req.body.id,req.body.comment);
    
    res.status(200).json({})
})

app.post("/addPost",async(req,res)=>{
    console.log("HIT IN THE /addPost ROUTE", req.body)
    await mongoFunctions.addPost(req.body.topic,req.body.title,req.body.content);
    
    res.status(200).json({})
})