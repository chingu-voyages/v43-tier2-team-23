import { useState, useEffect } from 'react';
import './AlertIcon.scss';

export default function AlertsIcon (props:{time:number}) {
    const [alert, setAlert] = useState(false);
    const [alertStyle, setAlertStyle] = useState('alert-icon');
    
    useEffect(() => {
        if (alert) {
            // const alertStyle = 
            props.time % 2 === 0 ? 
            console.log('beep') : console.log('boop')
            // 'no-alert' : 'alert-icon'
        }
      }, [alert, props.time]);      // reactive values

    return (
    <>
        <span className={alert? 'alert-icon' : 'no-alert'}>{
                    alert? '!' : 'No Alerts'
            }
        </span>
    </>
    
    )
}