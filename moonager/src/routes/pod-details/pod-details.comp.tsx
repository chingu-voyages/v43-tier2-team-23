import '../pod-details/pod-details.styles.scss';
import { Link } from 'react-router-dom';

export default function PodDetails(props: {menuIsOpen: boolean, podRoute: string }) {

    return(
        <div className={`pod-details ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <header>
                <Link to='/'>
                    <button>Back</button>
                </Link>
                
                <h1>Pod Details</h1>
            </header>

            <div className='pod-info-wrapper'>

            </div>
            
        </div>
    )
}