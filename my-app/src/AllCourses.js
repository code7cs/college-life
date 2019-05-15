import React, {Component} from 'react';
import APIserivce from './APIservice';
import QuackCentre from './courseData'

class App extends Component{
    constructor(){
        super()
        this.state = {
            courses: []
        }
    }
    
    async componentDidMount(){
       console.log("Coming inside AllCourses")
       let Courses = await APIserivce.getCourses()
       console.log("Courses", Courses.courses)
       this.setState({
         "courses": Courses.courses
       })
    }

    render(){
      if (!this.state.courses.length) { //no users
        return <p>Loading. . . </p>;
    }
      return (
        <div className="container">
        {
            this.state.courses.map((item, index) => {
                return <QuackCentre key={index} {...item} />;
            })
        }
      </div>
      )
    }
   
};

export default App;
