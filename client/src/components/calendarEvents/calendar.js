import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Day from './day/day';

export default function DisplayCalendar({url}) {
  const [events, setEvents] = useState([])
  const [eventSelected, setEventSelected] = useState({})
  const [showCreateEvent, setShowCreateEvent] = useState(false);

  useEffect(() => {
    axios.get(`${url}/server/calendar`).then((res) => {
      setEvents(res.data);
    });
  }, [url])

  return (
    <React.Fragment>
      {showCreateEvent && <CreateEvent url={url} setEvents={setEvents}/>}
      <Day day={dayjs()} events={events} setEventSelected={setEventSelected} setShowCreateEvent={setShowCreateEvent}/>
      {eventSelected && <ShowEvent event={eventSelected} />}
    </React.Fragment>
  )
}