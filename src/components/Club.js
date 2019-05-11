import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class Club extends Component {
    render() {
        const descriptionStyle = {
            textAlign: "justify",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            webkitLineClamp: "7",
            webkitBoxOrient: "vertical"
        };
        console.log(this.props);
        return (
            <Card className="col-md-4" style={{ width: "18rem", margin: "0 20px" }}>
                <Card.Img variant="top" style={{ height: "180px", objectFit: "cover" }} src={this.props.club.src} />
                <Card.Body>
                    <Card.Title>{this.props.club.title}</Card.Title>
                    <Card.Text style={descriptionStyle}>{this.props.club.description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}
export default Club;
