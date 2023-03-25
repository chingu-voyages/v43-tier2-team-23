import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";
import { Link } from 'react-router-dom';

export const Pod = ({ pod }: PodType ) => {
  const { name, population, image } = pod;

  function getRoute() {
    console.log(pod.route)
  }
  
  return (
    <Link to='/pod-details' className='tile-link'>
      <div onClick={getRoute} className='pod'>
        <img src={image} className='pod-thumbnail'></img>
        <p>{name}</p>
        <p>Population: {population}</p>
      </div>
    </Link>
  );
};
