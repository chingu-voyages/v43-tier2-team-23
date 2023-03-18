import '../alerts/alerts.styles.scss';

type AlertsProps = {
    menuIsOpen: boolean
}

function Alerts(props: AlertsProps) {
    return(
        <div className={`alerts ${props.menuIsOpen ? 'open' : 'closed'}` }>
            <h1>Alerts</h1>
        </div>

    )
}

export default Alerts;