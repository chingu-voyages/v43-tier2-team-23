import '../pod-details/pod-details.styles.scss';
import { Link } from 'react-router-dom';
// IMPORT DATA
import { podData } from '../../../backend/pods';

export default function PodDetails(props: {menuIsOpen: boolean, podRoute: string }) {


    return(
        <div className={`pod-details ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <header>
                <Link to='/'>
                    <button>Back</button>
                </Link>
                
                <h1>Pod Details</h1>
            </header>

            <div className='pod-map-wrapper'>

                <div className='coordinates-panel'>
                    <h2>LOCATION</h2>
                    <p>Coords</p>
                    <p>Coords</p>
                </div>

                <div className='map-panel'>
                    <div className='pin'>
                        {/*This pin will change position based on data with inline styling*/}
                    </div>
                </div>

            </div>

            <h2 className='details-title'>Pod Status / Personnel</h2>
            
            <div className='details-panel'>
                <p className='data'></p>
            </div>
            
        </div>
    )
}