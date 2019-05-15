const MongoClient = require('mongodb').MongoClient;
let uri = "mongodb+srv://Rohan:rohan12345@cluster0-exgst.mongodb.net/test?retryWrites=true"
let collection = "";
const client = new MongoClient(uri, {useNewUrlParser: true, autoReconnect: true, keepAlive: 30000, connectTimeoutMS: 30000});

async function getCollection(collectionName)
{
  await client.connect();
  switch(collectionName) {
    case "Users":
      collection = client.db("CollegeLife").collection("Users");
      break;
    case "AllCourses":
      collection = client.db("CollegeLife").collection("Courses");
      break;
    case "Events":
      collection = client.db("CollegeLife").collection("Events");
      break;
    case "Quacks":
      collection = client.db("CollegeLife").collection("Queries");
      break;
    case "Clubs":
      collection = client.db("CollegeLife").collection("Clubs");
      break;
    case "Articles":
      collection = client.db("CollegeLife").collection("Articles");
      break;
    default:
      console.log("Inside Switch Statement . Collection not found")
      break;
  }
  return collection;
}

async function close()
{
  await client.close();
}


module.exports = {
  getCollection, close
}
