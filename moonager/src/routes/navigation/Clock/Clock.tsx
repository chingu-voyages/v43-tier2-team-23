import React from "react";
import { useState, useEffect } from "react";
import '../Clock/clock-styles.scss';

  export default function Clock (props: {developerMode:boolean, time:number, setTime:Function}) {   

    useEffect(() => {
      let timer:number = setInterval(() => {
          props.setTime(props.time + 1000)      // push the captured time forward 1 second (1000 milliseconds) 
          return (clearInterval(timer));        // Clean-up function
      }, props.developerMode ? .0001 : 1000);   // this will set the interval to be either 1 millisecond or 1 second. If it's 1 millisecond, a second will pass by every millisecond in real time
    }, [props.developerMode, props.time]);      // reactive values

    function formatTime(time:number){
      const options:Intl.DateTimeFormatOptions = { weekday: undefined, year: '2-digit', month: 'numeric', day: 'numeric', hour12: true} as const;
      const date = new Date(time) // create a new Date object based on setInterval
      const localTime = date.toLocaleDateString(undefined, options);
      const hour = date.getHours().toString();
      // const hours = (hour > 12 ? hour % 12 : hour).toString().padStart(2,'0');
      const minutes = date.getMinutes().toString().padStart(2,'0');
      const seconds = date.getSeconds().toString().padStart(2,'0');
      return (
        <>
          <p className='time'>
            {`${hour}:${minutes}:${seconds}`}
            <br></br>
            {`${localTime}`}
          </p>
        </>
        )
    }

    return(
            <div>{formatTime(props.time)}</div>
    )
  }