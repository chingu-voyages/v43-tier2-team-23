import '../requests/requests.styles.scss';
import { RequestsProps } from './requests-types';


function Requests(props: RequestsProps) {
    return(
        <div className={`requests ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <h1>Requests</h1>
        </div>

    )
}

export default Requests;