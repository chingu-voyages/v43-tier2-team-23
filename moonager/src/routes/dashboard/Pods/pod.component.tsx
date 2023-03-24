import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";
import { Link } from 'react-router-dom';

export const Pod = ({ pod }: PodType ) => {
  
  function getRoute() {
    console.log(pod.route)
  }
  
  const { name, population } = pod;
  return (
    <Link to='/pod-details' className='tile-link'>
      <div onClick={getRoute} className='pod'>
        <p>{name}</p>
        <p>Population: {population}</p>
      </div>
    </Link>
  );
};
