import React, { Component } from 'react';

class QuackCentre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      // title: 'Default title',
      // description: 'Default description',
      // subject: 'Stevens'
    }
  }

  componentDidMount() {
    console.log(
      "Courses", this.props
    );
    this.setState({
      // votes: this.props.votes,
      title: this.props.courseID,
      content: this.props.courseName,
      instructor: this.props.courseInstructor,
    })
  }

  incrementVotes = () => {
    this.setState({
      votes: this.state.votes + 1
    });
    // console.log(this.state.votes);
  }

  decrementVotes = () => {
    if (this.state.votes > 0) {
      this.setState({
      votes: this.state.votes - 1
    });}
    // console.log(this.state.votes)
  }

  render() {
    // let body = null;
    let votingBtns = null;
    let courseName = null;
    let tileContent = null;
    let tileDescription = null;
    // console.log(this.props);


    if (this.state.votes !== 0) {
      votingBtns = (
        <div className="voting-btns">
          <button className="btn upvote"><i className="fas fa-caret-up"></i></button>
          <span className="vote-count">{this.state.votes} votes</span>
          <button className="btn downvote"><i className="fas fa-caret-down"></i></button>
        </div>
      );
    } else {
      votingBtns = (
        <div className="voting-btns">
          <button className="btn upvote" onClick={this.incrementVotes}><i className="fas fa-caret-up"></i></button>
          <span className="vote-count">0 votes</span>
          <button className="btn downvote" onClick={this.decrementVotes}><i className="fas fa-caret-down"></i></button>
        </div>
      );
    }

    if (this.state.content && this.state.content !== "Default title") {
      tileContent = (
        <div className="tile-content">
          <h4>
            {this.state.content}
          </h4>
        </div>
      );
    } else {
      tileContent = (
        <div className="tile-content">
          <h4>
            Default title
          </h4>
        </div>
      );
    }

    if (this.state.title && this.state.title !== "Stevens") {
      courseName = (
        <div className="course-name">
          <a href={`/${this.state.title}`}>{this.state.title}</a>
        </div>
      );
    } else {
      courseName = (
        <div className="course-name">
          <a href="#">Stevens</a>
        </div>
      );
    }

    if (this.state.comments && this.state.comments !== "Default description") {
      tileDescription = (
        <div className="topic-description">
          <p>{this.state.comments}</p>
        </div>
      );
    } else {
      tileDescription = (
        <div className="topic-description">
          <p>Course instructor: {this.state.instructor}</p>
        </div>
      )
    }


    return (
      <div className="topic-tile">
        <div className="tile-contents">
            {votingBtns}
            <div className="tile-topic">
              {courseName}
              {tileContent}
              {tileDescription}
              <div className="topic-comment">
                <button type="button" className="btn btn-primary btn-sm">Comment</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default QuackCentre;