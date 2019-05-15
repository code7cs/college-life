import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import ArticleContainer from './ArticleContainer'
import QuackContainer from './QuackContainer'
import AllCourses from './AllCourses'
import About from './About'
import Events from './EventsContainer'
import Clubs from './Clubs'
import './App2.css'
import SignUp from './signup'
import SignIn from './SignIn'
import AddComment from './AddComment'
import AddPost from './CreateTodo'

const clubsData = require("./clubs.json")


class App extends Component{

    
    
    async componentDidMount(){
      
    }

    render(){
      return (
        <div className="container">
        <Navbar />
        <BrowserRouter>
          <Switch>
             
              <Route exact path='/articles' component={ArticleContainer}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/quackCentre' component={QuackContainer}/>
              <Route exact path='/allCourses' component={AllCourses}/>
              <Route exact path='/events' component={Events}/>
              <Route path='/clubs' render={(props) => <Clubs {...props} clubs={clubsData} />} />
              <Route exact path='/signup' component={SignUp}/>
              <Route exact path='/' component={SignIn}/>
              <Route exact path='/addComment/:id' component={AddComment}/>
              <Route exact path='/addPost' component={AddPost}/>
          </Switch>
       </BrowserRouter>
       </div>
        
      )
    }
   
};

export default App;
