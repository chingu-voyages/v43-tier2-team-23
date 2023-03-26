import '../pod-details/pod-details.styles.scss';
import { Link } from 'react-router-dom';
// IMPORT DATA
import { podData } from '../../../backend/pods';
import mapPin from '../../assets/map-pin.png';

export default function PodDetails(props: {menuIsOpen: boolean, podRoute: string }) {

    function searchArrayByRoute(arr: string | any[], route: string) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].route === route) {
                return arr[i];
            }
        }
    }
    const currentPod = searchArrayByRoute(podData, props.podRoute);

    return(
        <div className={`pod-details ${props.menuIsOpen ? 'open' : 'closed'}`}>
            <header>
                <Link to='/'>
                    <button>Back</button>
                </Link>
                
                <h1>Pod Details - {currentPod.name}</h1>
            </header>

            <div className='pod-map-wrapper'>

                <div className='coordinates-panel'>
                    <h2>LOCATION</h2>
                    <p>{currentPod.coords1}</p>
                    <p>{currentPod.coords2}</p>
                </div>

                <div className='map-panel'>

                    <div 
                        className='map-pin-wrapper'
                        style={{
                            marginTop: (currentPod.x + '%'),
                            marginLeft: (currentPod.y + '%')
                        }}
                    >
                        <img className='pin' src={mapPin}></img>
                        <p className='pin-label'>{currentPod.name}</p>
                    </div>
                    
                </div>

            </div>

            <h2 className='details-title'>Pod Status / Personnel</h2>
            
            <div className='details-panel'>
                <p>Pod Name: {currentPod.name}</p>
                <p>Population: {currentPod.population}</p>
                <h5>Current Supplies</h5>
                <p>Electricity: {currentPod.supplies.electricity}</p>
                <p>Food: {currentPod.supplies.food}</p>
                <p>Oxygen: {currentPod.supplies.oxygen}</p>
                <p>Water: {currentPod.supplies.water}</p>
            </div>
            
        </div>
    )
}