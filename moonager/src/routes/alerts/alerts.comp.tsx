import '../alerts/alerts.styles.scss';
import { AlertsProps } from './alerts-types';


function Alerts(props: AlertsProps) {
    
    return(
        <div className={`alerts ${props.menuIsOpen ? 'open' : 'closed'}` }>
            <h1>Alerts</h1>
        </div>

    )
}

export default Alerts;