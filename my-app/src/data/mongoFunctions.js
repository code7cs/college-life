const userFunctions = require("./mongoConnection")
const mongodb = require('mongodb');

async function test(){
    console.log("Inside test")
    let collection = await userFunctions.connect();
    console.log("collection:", collection);
    collection.insertOne({'a':'a'});
    await userFunctions.close();
}

async function getAllCourses(){
    let collection = await userFunctions.getCollection("AllCourses");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

async function getAllEvents(){
    let collection = await userFunctions.getCollection("Events");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

async function getAllQuacks(){
    let collection = await userFunctions.getCollection("Quacks");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

async function getAllClubs(){
    let collection = await userFunctions.getCollection("Clubs");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

async function getAllArticles(){
    let collection = await userFunctions.getCollection("Articles");
    let courses = collection.find({}).toArray();
    console.log("collection:", courses);
    return courses;
}

async function getPostInformation(id){
    
    let objectId = new mongodb.ObjectID(id);
    let collection = await userFunctions.getCollection("Articles");
    
    let courses = await collection.findOne({_id: objectId})
    
    return courses;
}

async function increment(id){
    
    let objectId = new mongodb.ObjectID(id);
    let collection = await userFunctions.getCollection("Articles");
    
    await collection.update({_id: objectId}, {$inc: {votes: 1}});
    
}


async function decrement(id){
    
    let objectId = new mongodb.ObjectID(id);
    let collection = await userFunctions.getCollection("Articles");
    
    await collection.update({_id: objectId}, {$inc: {votes: -1}});
    
}

async function addComment(id, comment){
    
    let objectId = new mongodb.ObjectID(id);
    let collection = await userFunctions.getCollection("Articles");
    
    await collection.update({_id: objectId}, {$push: {comments: comment}})
    
}

async function addPost(topic, title,content){
    let collection = await userFunctions.getCollection("Articles");
    let newPost = {
        "topic" : topic,
        "title": title,
        "content": content,
        "votes": 0,
        "author": "Student",
        "comments": []
    }
    await collection.insertOne(newPost)
    
}


module.exports = {
    test, getAllCourses, getAllEvents, getAllQuacks, getAllClubs, getAllArticles,getPostInformation, increment, decrement, addComment, addPost
}
