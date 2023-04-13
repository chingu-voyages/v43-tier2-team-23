import styles from './pods.module.scss';
import { PodListTypes } from "./pods.types";
import { Pod } from "./pod.component";
import { useEffect, useState } from "react";

export const Pods = ({ pods, podRoute, setPodRoute }: PodListTypes ) => {

  const [podSearch, setPodSearch] = useState('');
  const [podSorting, setPodSorting] = useState('population descending');

  if (podSearch.length > 0) {
    pods = pods.filter((pod) => {
      return pod.name.toLowerCase().indexOf(podSearch.toLowerCase()) > -1
    });
  }
  
  switch(podSorting) {
    case 'population descending':
      pods = pods.sort((a, b) => b.population - a.population);
      break;
    case 'population ascending':
      pods = pods.sort((a, b) => a.population - b.population);
      break;
    case 'pod name':
      pods = pods.sort((a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
      break;
    default: // catches all other values (lowest supplies)
      for (let supply in pods[0]?.supplies) {
        const supplyKey = podSorting.split(' ')[0];
        if (supplyKey === supply) {
          pods = pods.sort((a, b) => (a.supplies as any)[supplyKey] - (b.supplies as any)[supplyKey]);
          break;
        }
      }
  }

  const allPods = pods.map((pod) => <Pod key={pod.id} pod={pod} podRoute={podRoute} setPodRoute={setPodRoute}/>);

  return (
    <div className={styles['pods-wrapper']} >
      <div className={styles['filter-wrapper']} >

        <div >
          <div >Sort By</div>
          <select defaultValue={'population descending'} onChange={(e) => setPodSorting(e.target.value)} >
            <option hidden>Sort By</option>
            <option value='population descending' >population {`(descending)`}</option>
            <option value='population ascending' >population {`(ascending)`}</option>
            <option value='pod name' >pod name </option>
            {pods[0]?.supplies ? 
              Object.keys(pods[0]?.supplies).map((supply) => {
                return (
                  <option key={`dashboard-${pods[0].id}${supply}`} value={`${supply} lowest`} >{`${supply} (lowest)`}</option>
                );
              })
              :
              null
            }
          </select>
        </div>

        <div className={styles['search-wrapper']} >
          <div >Pod Search</div>
          <input style={{border: 'none'}} type='search' name='q' placeholder='ex: "Pod Name"...' onChange={(e) => setPodSearch(e.target.value)} />
        </div>

      </div>

      <div className="tile-wrapper">
        {allPods}
      </div>
    </div>
  );
};
