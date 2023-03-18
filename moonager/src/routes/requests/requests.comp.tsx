import '../requests/requests.styles.scss';

type RequestsProps = {
    menuIsOpen: boolean
}

function Requests(props: RequestsProps) {
    return(
        <div className={`requests ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <h1>Requests</h1>
        </div>

    )
}

export default Requests;