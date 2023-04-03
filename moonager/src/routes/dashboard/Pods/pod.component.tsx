import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";
import { Link } from 'react-router-dom';

// Icons
import Electric from '../../../assets/electricity.png';
import Food from '../../../assets/food.png';
import Oxygen from '../../../assets/oxygen.png';
import Water from '../../../assets/water.png';

export const Pod = ({ pod, podRoute, setPodRoute }: PodType ) => {
  const { name, population, image, supplies } = pod;

  function getRoute() {
    setPodRoute(pod.route)
  }
  
  return (
    <Link to='/pod-details' className='tile-link'>
      <div onClick={getRoute} className='pod'>
        <p className='pod-name'>{name}</p>

        <div className='details-flex-wrapper'>
          <img src={image} className='pod-thumbnail'></img>
          
          <div className='resources-wrapper'>
            <div className='resource-row'>
              <div className='resource-flex'>
                <img className='tile-icon' src={Electric}/>
                <p className='tile-supply-value'>- {supplies.electricity}</p>
              </div>

              <div className='resource-flex'>
                <img className='tile-icon' src={Food}/>
                <p className='tile-supply-value'>- {supplies.food}</p>
              </div>
            </div>

            <div className='resource-row'>
              <div className='resource-flex'>
                <img className='tile-icon' src={Oxygen}/>
                <p className='tile-supply-value'>- {supplies.oxygen}</p>
              </div>

              <div className='resource-flex'>
                <img className='tile-icon' src={Water}/>
                <p className='tile-supply-value'>- {supplies.water}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Link>
  );
};
