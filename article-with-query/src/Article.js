import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AddComment from "./AddComment";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
            // title: 'Default title',
            // description: 'Default description',
            // subject: 'Stevens'
        };
    }

    componentDidMount() {
        console.log("Article", this.props);
        this.setState({
            // votes: this.props.votes,
            title: this.props.title,
            topic: this.props.topic,
            author: this.props.author,
            content: this.props.content
        });
    }

    incrementVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        });
        // console.log(this.state.votes);
    };

    decrementVotes = () => {
        if (this.state.votes > 0) {
            this.setState({
                votes: this.state.votes - 1
            });
        }
        // console.log(this.state.votes)
    };

    render() {
        // let body = null;
        let votingBtns = null;
        let courseName = null;
        let tileTitle = null;
        let tileDescription = null;
        // console.log(this.props);

        if (this.state.votes !== 0) {
            votingBtns = (
                <div className="voting-btns">
                    <button className="btn upvote">
                        <i className="fas fa-caret-up" />
                    </button>
                    <span className="vote-count">{this.state.votes} votes</span>
                    <button className="btn downvote">
                        <i className="fas fa-caret-down" />
                    </button>
                </div>
            );
        } else {
            votingBtns = (
                <div className="voting-btns">
                    <button className="btn upvote" onClick={this.incrementVotes}>
                        <i className="fas fa-caret-up" />
                    </button>
                    <span className="vote-count">0 votes</span>
                    <button className="btn downvote" onClick={this.decrementVotes}>
                        <i className="fas fa-caret-down" />
                    </button>
                </div>
            );
        }

        if (this.state.title && this.state.title !== "Default title") {
            tileTitle = (
                <div className="topic-title">
                    <h4>{this.state.title}</h4>
                </div>
            );
        } else {
            tileTitle = (
                <div className="topic-title">
                    <h4>Default title</h4>
                </div>
            );
        }

        if (this.state.topic && this.state.topic !== "Stevens") {
            courseName = (
                <div className="course-name">
                    <a href={`/${this.state.topic}`}>{this.state.topic}</a>
                </div>
            );
        } else {
            courseName = (
                <div className="course-name">
                    <a href="/">Stevens</a>
                </div>
            );
        }

        if (this.state.content && this.state.content !== "Default description") {
            tileDescription = (
                <div className="topic-description">
                    <p>{this.state.content}</p>
                </div>
            );
        } else {
            tileDescription = (
                <div className="topic-description">
                    <p>Default description</p>
                </div>
            );
        }

        return (
            <div className="topic-tile">
                <Router>
                    <div className="tile-contents">
                        {votingBtns}
                        <div className="tile-topic">
                            {courseName}
                            {tileTitle}
                            {tileDescription}
                            <div id="content" className="topic-comment">
                                <a href="/addcomment">
                                    <button type="button" className="btn btn-primary btn-sm">
                                        Comment
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Article;
