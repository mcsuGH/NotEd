import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Day from './day/day';

export default function DisplayCalendar({url}) {
  const [events, setEvents] = useState([])
  const { eventSelected } = useContext(CalendarGlobalContext);

  useEffect(() => {
    axios.get(`${url}/server/calendar`).then((res) => {
      setEvents(res.data);
    });
  }, [url])

  return (
    <React.Fragment>
      <CreateEvent url={url} setEvents={setEvents}/>
      <Day day={dayjs()} events={events}/>
      {eventSelected && <ShowEvent event={
        {
          title: "hi",
          description: "bye",
          date: "2022-06-23",
          label: "indigo",
        }
      } />}
    </React.Fragment>
  )
}