import '../requests/requests.styles.scss';
import { RequestsProps } from './requests-types';


function Requests(props: RequestsProps) {
    return(
        <div className={`requests ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <h1>Requests</h1>
            <div style={{marginTop: '15px', marginLeft: '5px', fontWeight: 600 }} >
                Coming Soon!
            </div>
        </div>

    )
}

export default Requests;