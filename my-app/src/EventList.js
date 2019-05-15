import React, {Component} from 'react';
import Event from './Event';

class EventList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events
    }
  }

  async componentDidMount(props){
      this.setState({
        events: this.props.events
      })
  }

  render() {
    console.log("Inside Levl 2",this.props.events);
    if (!this.props.events.length) { //no users
        return <p>Loading. . . </p>;
    }
    return <div className="article-list">
            {
                this.props.events.map((item, index) => {
                    return <Event key={index} {...item} />;
                })
            }
    </div>;
  }
}

export default EventList;