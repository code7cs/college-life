import React, {Component} from 'react';
import Event from './Event';

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    }
  }
  render() {
    const events = this.state.events;
    console.log(events);
    if (!events.length) { //no users
        return <p>No articles to display</p>;
    }
    return <div className="article-list">
            {
                events.map((item, index) => {
                    return <Event key={index} {...item} />;
                })
            }
    </div>;
  }
}

export default EventList;