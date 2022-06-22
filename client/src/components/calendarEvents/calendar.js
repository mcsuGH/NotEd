import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateEvent from './createEvent/createEvent';
import Day from './day/day';

export default function DisplayCalendar({url}) {
  const [events, setEvents] = useState([])

  useEffect(() => {
    axios.get(`${url}/server/calendar`).then((res) => {
      setEvents(res.data);
    });
  }, [url])

  return (
    <React.Fragment>
      <CreateEvent url={url}/>
      <Day data={events}/>
    </React.Fragment>
  )
}