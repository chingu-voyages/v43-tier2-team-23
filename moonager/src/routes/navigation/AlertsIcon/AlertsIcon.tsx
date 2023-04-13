import { useState, useEffect, useContext } from 'react';
import './AlertIcon.scss';
import { DataContext } from '../../../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function AlertsIcon (props:{time:number}) {
    
    const { alertsDataState, } = useContext(DataContext);
    
    const [alert, setAlert] = useState(false);

    /*
    const [alertStyle, setAlertStyle] = useState('alert-icon');
    
    useEffect(() => {
        if (alert) {
            // const alertStyle = 
            props.time % 2 === 0 ? 
            console.log('beep') : console.log('boop')
            // 'no-alert' : 'alert-icon'
        }
      }, [alert, props.time]);      // reactive values
    */
      
    useEffect(() => {
        if (alertsDataState.length > 0) {
            setAlert(true);
        } else {
            setAlert(false);
        }
    }, [alertsDataState]);

    const navigate = useNavigate();
    const clickHandler = () => {
        if (alert) {
            navigate('/alerts');
        } else {
            return;
        }
    }

    return (
    <>
        <span onClick={clickHandler} className={alert? 'alert-icon' : 'no-alert'}>{
                    alert? '!' : 'No Alerts'
            }
        </span>
    </>
    
    )
}