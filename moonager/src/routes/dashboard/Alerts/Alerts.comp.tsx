import './alerts.styles.scss';
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

function Alerts( props:any ) {
  const { data, setData } = useContext(DataContext);

  const clickHandler = () => {
    props.setAllocateOrRequest(true);
    setTimeout(() => {
      document.getElementById('allocate-select-resource')?.focus();
    }, 50);
  }

  return (
    <div className='alerts-container' >
      <div className='alerts-header' >Alerts</div>
      <div className='scroll-container' >
        {data.alerts.map((alert: any) => {
          const units = data.supplies.filter((supply) => supply.name.toLowerCase() === alert.supply)[0]?.units;
          return (
            <div className='low-supply' onClick={clickHandler} >
              <div style={{marginRight: '8px'}}>!</div> <div >{alert.pod} low {alert.supply} {`(${alert.amount} ${units ? units : ''})`}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Alerts;