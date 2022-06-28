import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateEvent from './createEvent/createEvent';
import ShowEvent from './showEvent/showEvent';
import Month from './month/month';
import Filter from './filter/filter';
import dayjs from 'dayjs';
import { getMonth } from "./util";

export default function Calendar({url, user}) {
  const [data, setData] = useState([])
  const [events, setEvents] = useState([])
  const [eventSelected, setEventSelected] = useState(null)
  const [indigoChecked, setIndigoChecked] = useState(true)
  const [redChecked, setRedChecked] = useState(true)
  const [blueChecked, setBlueChecked] = useState(true)
  const [greenChecked, setGreenChecked] = useState(true)
  const [purpleChecked, setPurpleChecked] = useState(true)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    const checkFilters = (event) => {
      if (event.label === "indigo" && indigoChecked) {
        return event
      }
      if (event.label === "red" && redChecked) {
        return event
      }
      if (event.label === "blue" && blueChecked) {
        return event
      }
      if (event.label === "green" && greenChecked) {
        return event
      }
      if (event.label === "purple" && purpleChecked) {
        return event
      }
    }
    let filteredEvents = data.filter(checkFilters);
    setEvents(filteredEvents);
  }, [indigoChecked, redChecked, blueChecked, greenChecked, purpleChecked, data]);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const fetchEvents = () => {
      if (user.id && url) {
        axios.get(`${url}/server/calendar/${user.id}`).then((res) => {
          setData(res.data);
        });
      }
    }
    fetchEvents()
  }, [url, user.id])

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
          indigoChecked={indigoChecked} setIndigoChecked={setIndigoChecked}
          redChecked={redChecked} setRedChecked={setRedChecked}
          blueChecked={blueChecked} setBlueChecked={setBlueChecked}
          greenChecked={greenChecked} setGreenChecked={setGreenChecked}
          purpleChecked={purpleChecked} setPurpleChecked={setPurpleChecked}
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