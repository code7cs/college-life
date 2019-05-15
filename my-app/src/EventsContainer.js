import React, { Component } from 'react';
import './ArticleFiles.css';
import EventList from './EventList';
import events from './event_data';
import APIService from './APIservice'

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() { 
    let eventsNew =  await APIService.getEvents()
    console.log("Coming back to react : ", eventsNew.courses)
    this.setState({
      events: eventsNew.courses
    });
    // console.log(this.state.articles)
  }
  render() {
    console.log("Inside Render: ",this.state.events);
    let body = (
      <div className="container">
          <EventList events={this.state.events} />
      </div>
    );
    return body;
  }
}

export default EventsContainer;