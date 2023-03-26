import { PodListTypes } from "./pods.types";
import { Pod } from "./pod.component";

export const Pods = ({ pods }: PodListTypes, podRoute: string ) => {

  const allPods = pods.map((pod) => <Pod key={pod.id} pod={pod} />);
  
  return (
    <div className="tile-wrapper">
      {allPods}
    </div>
  );
};
