import './alerts.styles.scss';
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

function Alerts() {
  const { data, setData } = useContext(DataContext);

  return (
    <div >
      <div className='alerts-header' >Alerts</div>
      {data.alerts.map((alert: any) => {
        return (
          <div className='low-supply' >
            {alert.pod} low {alert.supply} {`(${alert.amount})`}
          </div>
        );
      })}
    </div>
  )
}

export default Alerts;