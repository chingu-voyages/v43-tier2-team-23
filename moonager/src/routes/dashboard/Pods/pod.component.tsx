import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../../context/DataContext';

// Icons
import Electric from '../../../assets/electricity.png';
import Food from '../../../assets/food.png';
import Oxygen from '../../../assets/oxygen.png';
import Water from '../../../assets/water.png';

const precision = 3;

export const Pod = ({ pod, podRoute, setPodRoute }: PodType ) => {
  const { name, population, image, supplies } = pod;

  function getRoute() {
    setPodRoute(pod.route)
  }

  // notification animation of resource changing in reserves
  useEffect(() => {
    const elements = document.getElementsByClassName('tile-supply-value');
    const animation = [ { color: '#ff0000' }, { color: '#fff' } ];
    for (let i of elements) {
        i.addEventListener('DOMSubtreeModified', () => {
            i.animate(animation, 3000);
        });
    }
}, []);
  
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
                <p className='tile-supply-value'>- {supplies.electricity.toPrecision(precision)}</p>
              </div>

              <div className='resource-flex'>
                <img className='tile-icon' src={Food}/>
                <p className='tile-supply-value'>- {supplies.food.toPrecision(precision)}</p>
              </div>
            </div>

            <div className='resource-row'>
              <div className='resource-flex'>
                <img className='tile-icon' src={Oxygen}/>
                <p className='tile-supply-value'>- {supplies.oxygen.toPrecision(precision)}</p>
              </div>

              <div className='resource-flex'>
                <img className='tile-icon' src={Water}/>
                <p className='tile-supply-value'>- {supplies.water.toPrecision(precision)}</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </Link>
  );
};
