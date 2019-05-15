import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import Club from "./Club";
import APIService from './APIservice'

class Clubs extends Component {
    constructor(props){
        super(props)
        this.state = {
            clubs: []
        }
    }

    async componentDidMount(){
        let clubs = await APIService.getClubs()
        this.setState({
            clubs: clubs.courses
        })
        console.log("After Setting: ",this.state.clubs)
    }

    render() {
        if (!this.state.clubs.length) { //no users
            return <p>Loading. . . </p>;
        }
        return (
            
            <div className="container"> 
                <CardGroup className="col-md-12">
                <div  className="card-deck">
                    {this.state.clubs.map(club => (
                        <Club key={club.id} club={club} />
                    ))}
                    </div>
                </CardGroup>
            </div>
        );
    }
}

export default Clubs;
