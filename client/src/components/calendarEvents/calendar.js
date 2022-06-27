import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Month from './month/month';
import { getMonth } from "./util";

export default function Calendar({url}) {
  const [events, setEvents] = useState([])
  const [eventSelected, setEventSelected] = useState(null)
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(CalendarGlobalContext);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    axios.get(`${url}/server/calendar`).then((res) => {
      setEvents(res.data);
    });
  }, [url])

  return (
    <React.Fragment>
      {showCreateEvent && <CreateEvent 
        url={url} 
        setEvents={setEvents} 
        setShowCreateEvent={setShowCreateEvent}
      />}
      <Month
        month={currentMonth} 
        events={events} 
        setEventSelected={setEventSelected} 
        setShowCreateEvent={setShowCreateEvent}
      />
      {eventSelected && <ShowEvent
        url={url}
        event={eventSelected} 
        setEventSelected={setEventSelected}
        setEvents={setEvents}
      />}
    </React.Fragment>
  )
}