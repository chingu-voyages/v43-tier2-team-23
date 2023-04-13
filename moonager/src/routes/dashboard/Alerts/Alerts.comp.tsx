import './alerts.styles.scss';
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../../context/DataContext";

function Alerts( props:any ) {
  const { suppliesDataState, alertsDataState, } = useContext(DataContext);

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
        {alertsDataState.length < 1 ? <div style={{color: 'black', textAlign: 'center', fontSize: '12px' }} >No Alerts</div> : null}
        {alertsDataState.map((alert: any) => {
          const units = suppliesDataState.find((supply) => supply.name.toLowerCase() === alert.supply)?.units;
          return (
            <div key={`dashboard-${alert.id}${alert.pod}`} className='low-supply' onClick={clickHandler} >
              <div style={{marginRight: '8px'}}>!</div> <div >{alert.pod} low {alert.supply} {`(${alert.amount} ${units ? units : ''})`}</div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Alerts;