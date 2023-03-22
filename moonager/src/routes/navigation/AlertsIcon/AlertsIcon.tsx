import { useState } from 'react';
import './AlertIcon.scss';

export default function AlertsIcon () {
    const [alert, setAlert] = useState(true);
    
    return (
    <>
        <span className={alert ? 'alert-icon' : 'no-alert'}>{alert? '!' : 'No Alerts'}</span>
    </>
    
    )
}