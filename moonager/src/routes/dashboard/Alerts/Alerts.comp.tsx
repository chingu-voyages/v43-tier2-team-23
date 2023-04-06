import './alerts.styles.scss';
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

function Alerts() {
  const { data, setData } = useContext(DataContext);

  const [lowSupplyPods, setLowSupplyPods] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const pods: any = [];
      data.pods.forEach((pod) => {
        for (let i in pod.supplies) {
          if ((pod.supplies as any)[i] < 1000) {
            pods.push({
              name: pod.name,
              supply: i,
              amount: (pod.supplies as any)[i],
            });
          }
        }
      });

      setLowSupplyPods(pods);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div >
      <div className='alerts-header' >Alerts</div>
      {lowSupplyPods.map((pod: any) => {
        return (
          <div className='low-supply' >
            {pod.name} low {pod.supply} {`(${pod.amount})`}
          </div>
        );
      })}
    </div>
  )
}

export default Alerts;
