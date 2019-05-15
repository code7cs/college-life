import React, { Component } from 'react';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: 'Default Event',
      // description: 'Default description',
      // time: ''
    }
  }

  componentDidMount() {
    // console.log(
    //   "Article", this.props
    // );
    this.setState({
      name: this.props.name,
      description: this.props.description,
      time: this.props.time
    })
  }


  render() {
    // let body = null;
    let eventName = null;
    // let eventTitle = null;
    let eventDescription = null;
    let eventTime = null;
    // console.log(this.props);


    if (this.state.time !== 0) {
      eventTime = (
        <div className="voting-btns">
          {/* <button className="btn upvote"><i className="fas fa-caret-up"></i></button> */}
          <span className="vote-count">Time: {this.state.time}</span>
          {/* <button className="btn downvote"><i className="fas fa-caret-down"></i></button> */}
        </div>
      );
    } else {
      eventTime = (
        <div className="voting-btns">
          {/* <button className="btn upvote" onClick={this.incrementVotes}><i className="fas fa-caret-up"></i></button> */}
          <span className="vote-count">Time: TBD</span>
          {/* <button className="btn downvote" onClick={this.decrementVotes}><i className="fas fa-caret-down"></i></button> */}
        </div>
      );
    }

    if (this.state.name && this.state.name !== "Default title") {
      eventName = (
        <div className="topic-title">
          <h4>
            {this.state.name}
          </h4>
        </div>
      );
    } else {
      eventName = (
        <div className="topic-title">
          <h4>
            Default name
          </h4>
        </div>
      );
    }


    if (this.state.description && this.state.description !== "Default description") {
      eventDescription = (
        <div className="topic-description">
          <p>{this.state.description}</p>
        </div>
      );
    } else {
      eventDescription = (
        <div className="topic-description">
          <p>Default description</p>
        </div>
      )
    }


    return (
      <div className="topic-tile">
        <div className="tile-contents">
            {eventTime}
            <div className="tile-topic">
              {eventName}
              {eventDescription}
              {/* <div className="topic-comment">
                <button type="button" className="btn btn-primary btn-sm">Comment</button>
              </div> */}
            </div>
        </div>
      </div>
    );
  }
}

export default Event;