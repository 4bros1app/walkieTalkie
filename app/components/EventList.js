import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import EventEntry from './EventEntry.js'

class EventList extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: ["http://www.eventbrite.com/e/coding-tickets-31696280428"]
    }
  }

  componentDidMount() {
    console.log('in componentDidMount of eventlist')
    var context = this
    axios.get('/findAllEvents')
    .then(result=>{
      console.log('received these events from eventlist axios call', result.data)
      context.setState({
        events: result.data[0]
      })
    })
    .catch(err=>{
      console.log('error fetching events', err)
    })
  }

  render(){
    console.log('in render of eventlist and events are', this.state.events)
    var events = this.state.events
    return (    
      <div> 
        <p>hello world</p>
        {events.map((event, i) => (
          <EventEntry 
          eventUrl = {event.url}
          key={i}
          />
        ))}
      </div>
    )
  }
}

export default EventList;