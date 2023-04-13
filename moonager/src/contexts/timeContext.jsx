import { createContext, useContext, useState } from "react";

export const TimeContext = createContext({
    time: null,
    setTime: () => null
});

export const TimeProvider = ({children}) => {
    const [time, setTime] = useState(Date.now());
    const TimeObject = { time, setTime };

    return <TimeContext.Provider value={TimeObject}>{ children }</TimeContext.Provider>
}