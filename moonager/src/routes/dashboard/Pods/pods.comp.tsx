import { PodListTypes } from "./pods.types";
import { Pod } from "./pod.component";

export const Pods = ({ pods, podRoute, setPodRoute }: PodListTypes ) => {

  const allPods = pods.map((pod) => <Pod key={pod.id} pod={pod} podRoute={podRoute} setPodRoute={setPodRoute}/>);
  
  return (
    <div className="tile-wrapper">
      {allPods}
    </div>
  );
};
