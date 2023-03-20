import React from "react";
import { useState, useEffect } from "react";

// function formatTime(time:number) {
//     const hours = Math.floor(time / 360)
//     const minutes = Math.floor(time / 60);
//     const seconds = (time % 60).toString().padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
//   }

  export default function Clock () {   
    
    const [time, setTime] = useState(Date.now()); // get and set a snapshot of the time
    const [developerMode, setDeveloperMode] = useState(false);

    useEffect(() => {
      let timer:number = setInterval(() => {
        setTime((now) => now + 1000);   // push the time forward 1 second (1000 milliseconds)
        let date = new Date(time)       // update the Date object based on setInterval
      }, developerMode ? .0001 : 1000);     // this will set the interval to be either 1 millisecond or 1 second. If it's 1 millisecond, a second will pass by ever millisecond in real time, at 1000x normal speed.
  }, []);

    function formatTime(time:number){
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(time) // create a new Date object based on setInterval
      const localTime = date.toLocaleDateString(undefined, options);
      const hours = (date.getHours() > 12 ? date.getHours() % 12 : date.getHours()).toString().padStart(2,'0');
      const minutes = date.getMinutes().toString().padEnd(2,'0');
      const seconds = date.getSeconds().toString().padEnd(2,'0');
      return `${localTime} ${hours}:${minutes}:${seconds}`
    }

    

    return(
            <h3>{formatTime(time)}</h3>
    )
  }