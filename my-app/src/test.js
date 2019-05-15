const mongoFunctions = require( './data/mongoFunctions');

async function test(){
    let courses = await mongoFunctions.getAllCourses();
    console.log("Courses : ", courses)  
}

test()



