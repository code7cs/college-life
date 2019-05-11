import React, { Component } from "react";
import "./App.css";
import Clubs from "./components/Clubs";
const clubs = require("./data/clubs.json");

class App extends Component {
    state = {
        clubs: clubs
    };
    constructor() {
        super();
        console.log("App-Construtor");
    }

    render() {
        return (
            <div>
                <main className="container">
                    <Clubs clubs={this.state.clubs} />
                </main>
            </div>
        );
    }
}

export default App;
