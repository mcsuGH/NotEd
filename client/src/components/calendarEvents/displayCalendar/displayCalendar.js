import React from 'react';
import CreateEvent from '../createEvent/createEvent';

export default function DisplayCalendar({url}) {
  return (
    <React.Fragment>
      <CreateEvent url={url}/>
    </React.Fragment>
  )
}