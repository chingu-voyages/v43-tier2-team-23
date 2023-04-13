import "../dashboard/dashboard.styles.scss";
import { useState, useContext } from "react";
/* import { DashboardProps } from "./dashboard-types"; */
import { Supplies } from "../dashboard/Supplies/supplies.comp";
import Request from "./Request/Request.comp";
import Allocate from "./Allocate/Allocate.comp";
import "../dashboard/dashboard.styles.scss";
import { Pods } from "./Pods/pods.comp";
import NextResupply from './NextResupply/NextResupply';
import { DataContext } from '../../context/DataContext';
import Alerts from "./Alerts/Alerts.comp";

function Dashboard(props: { menuIsOpen:boolean, time:number, setTime:Function, developerMode:boolean, setDeveloperMode:Function, podRoute: string, setPodRoute: Function } ) {
  
  const { podDataState, } = useContext(DataContext);
  
  const [ allocateOrRequest, setAllocateOrRequest] = useState(true)

  function chooseAllocate() {
    setAllocateOrRequest(true)
  }

  function chooseRequest() {
    setAllocateOrRequest(false)
  }

  return (
    <div className={`dashboard ${props.menuIsOpen ? "open" : "closed"}`}>
      <header className='header-wrapper'>
        <h1>DASHBOARD</h1>
        <NextResupply time={props.time} />
      </header>
        

      <div className="dashboard-wrapper">
        <div className="supply-reserve">
          <h3>SUPPLY RESERVE</h3>

          <Supplies />
          
          <div className='dash-mobile-flex'>
            <div className='allocate-request-wrapper'>
              <div className='allocate-request-tabs'>
                <h5 onClick={chooseAllocate} style={ allocateOrRequest ? {backgroundColor: '#d9d9d9'} : {backgroundColor: '#d9d9d990'}}>Allocate</h5>
                <h5 onClick={chooseRequest} style={ !allocateOrRequest ? {backgroundColor: '#d9d9d9'} : {backgroundColor: '#d9d9d990'}}>Request</h5>
              </div>
            
            
              { allocateOrRequest ? 
              <div className="allocate-panel">
                <Allocate />
              </div>
              :
              <div className="request-panel">
                <Request />
              </div>
              }
            </div>
            
            <div className='alerts-panel'>
              <Alerts setAllocateOrRequest={setAllocateOrRequest} />
            </div>

          </div>
          

        </div>

        <div className="pods-section-wrapper">
          <div className="pods-header-wrapper">
            <h3>PODS</h3>
          </div>
          
          <Pods 
            pods={podDataState}
            podRoute={props.podRoute}
            setPodRoute={props.setPodRoute}
          />

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
