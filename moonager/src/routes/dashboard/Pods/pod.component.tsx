import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";
import { Link } from 'react-router-dom';

export const Pod = ({ pod }: PodType ) => {
  const { name, population } = pod;

  function getRoute() {
    console.log(pod.route)
  }
  
  return (
    <Link to='/pod-details' className='tile-link'>
      <div onClick={getRoute} className='pod'>
        <p>{name}</p>
        <p>Population: {population}</p>
      </div>
    </Link>
  );
};
