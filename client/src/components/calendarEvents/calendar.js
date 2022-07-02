import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Month from './month/month';
import Filter from './filter/filter';
import dayjs from 'dayjs';
import { getMonth } from "./util";

export default function Calendar({url, user}) {
  const [data, setData] = useState([]);
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState(["indigo", "red", "blue", "green", "purple"]);
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [eventSelected, setEventSelected] = useState(null);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    const checkFilters = (event) => {
      if (filters.includes(event.label)) {
        return event
      }
    }
    let filteredEvents = data.filter(checkFilters);
    setEvents(filteredEvents);
  }, [filters, data]);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const fetchEvents = () => {
      if (user._id && url) {
        axios.get(`${url}/server/calendar/${user._id}`).then((res) => {
          setData(res.data);
        });
      }
    }
    fetchEvents()
  }, [url, user._id])

  return (
    <React.Fragment>
      {showCreateEvent && <CreateEvent 
        url={url}
        daySelected={daySelected} 
        setData={setData} 
        setShowCreateEvent={setShowCreateEvent}
        user={user}
      />}
      {eventSelected && <ShowEvent
        url={url}
        event={eventSelected} 
        setEventSelected={setEventSelected}
        setData={setData}
      />}
      <div className="flex flex-1 h-screen">
        <Filter         
          filters={filters} setFilters={setFilters}
          monthIndex={monthIndex} setMonthIndex={setMonthIndex}
        />
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