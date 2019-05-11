import React, { Component } from "react";
import { CardGroup } from "react-bootstrap";
import Club from "./Club";

class Clubs extends Component {
    render() {
        const { clubs } = this.props;
        return (
            <div>
                <CardGroup className="container col-md-12">
                    {clubs.map(club => (
                        <Club key={club.id} club={club} />
                    ))}
                </CardGroup>
            </div>
        );
    }
}

export default Clubs;
