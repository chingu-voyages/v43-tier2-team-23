import '../Pods/pod.styles.scss';
import { PodType } from "./pods.types";

export const Pod = ({ pod }: PodType) => {
  
  function getRoute() {
    console.log(pod.route)
  }
  
  const { name, population } = pod;
  return (
      <div onClick={getRoute} className='pod'>
        <p>{name}</p>
        <p>Population: {population}</p>
      </div>
  );
};
