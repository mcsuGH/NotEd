import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Month from './month/month';
import Filter from './filter/filter';
import dayjs from 'dayjs';
import { getMonth } from "./util";

export default function Calendar({url}) {
  const [events, setEvents] = useState([])
  const [eventSelected, setEventSelected] = useState(null)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  let monthIndex = dayjs().month();
  
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
        daySelected={daySelected} 
        setEvents={setEvents} 
        setShowCreateEvent={setShowCreateEvent}
      />}
      {eventSelected && <ShowEvent
        url={url}
        event={eventSelected} 
        setEventSelected={setEventSelected}
        setEvents={setEvents}
      />}
      <div className="flex flex-1">
        <Filter />
        <Month
          month={currentMonth} 
          events={events} 
          setEventSelected={setEventSelected} 
          setShowCreateEvent={setShowCreateEvent}
          setDaySelected={setDaySelected}
        />
      </div>
    </React.Fragment>
  )
}