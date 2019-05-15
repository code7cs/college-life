import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {    
    return (
      
      <div className="nav-section">
        <div className="container mb-2">
          <nav className="navbar main-nav">
            <a className="nav-link" href="/">
              <span>CollegeLife</span>
            </a>
            <div className="d-flex flex-row-reverse nav-home">
           <a href="/about"><div className="p-2 ml-3">About  Us</div></a>
           <a href="/allCourses"><div className="p-2 ml-3">All Courses</div></a>
            <a href="https://my.stevens.edu/"><div className="p-2">My Stevens</div></a>
            </div>
          </nav>
        </div>
        <div className="container mb-4 secondary-nav">
            <a href="/events">Upcoming Events</a>
            <a href="/clubs"><span>Club Centre</span></a>
            <a href="/articles"><span>Articles</span></a>
            <a href="https://stevens.wd5.myworkdayjobs.com/External"><span>Workday</span></a>
            <a href="/quackCentre"><span>Quack Centre</span></a>
            <a href="https://stevens.joinhandshake.com/login"><span>Handshake</span></a>
            <a href="/addPost"><span>Add A Post</span></a>
        </div> 
      </div>
     
    );
  }
}

export default Navbar;
