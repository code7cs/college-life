import React, { Component } from "react";
import "./Navbar.css";

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
                            <div className="p-2 ml-3">About Us</div>
                            <div className="p-2 ml-3">
                                <a href="/allcourses">All Courses</a>
                            </div>
                            <div className="p-2">My Profile</div>
                        </div>
                    </nav>
                </div>
                <div className="container mb-4 secondary-nav">
                    Upcoming Events
                    <span>Club Centre</span>
                    <a href="https://stevens.wd5.myworkdayjobs.com/External">
                        <span>Workday</span>
                    </a>
                    <span>Quack Centre</span>
                    <a href="https://stevens.joinhandshake.com/login">
                        <span>Handshake</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;
