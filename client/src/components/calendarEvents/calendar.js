import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateEvent from './createEvent/createEvent';

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
    </React.Fragment>
  )
}