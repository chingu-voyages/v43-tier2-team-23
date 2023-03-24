import "../dashboard/dashboard.styles.scss";
import { useState } from "react";
/* import { DashboardProps } from "./dashboard-types"; */
import { Supplies } from "../dashboard/Supplies/supplies.comp";
import Request from "./Request/Request.comp";
import Allocate from "./Allocate/Allocate.comp";
import "../dashboard/dashboard.styles.scss";
import { Pods } from "./Pods/pods.comp";
import { podData } from "../../../../backend/pods";
import NextResupply from './NextResupply/NextResupply';

function Dashboard(props: { menuIsOpen:boolean, time:number, setTime:Function, developerMode:boolean, setDeveloperMode:Function, setPodRoute: Function } ) {
  return (
    // ternary function that changes margin-left based on menuIsOpen
    <div className={`dashboard ${props.menuIsOpen ? "open" : "closed"}`}>
      <h1>DASHBOARD</h1>
      <NextResupply time={props.time} />

      <div className="dashboard-wrapper">
        <div className="supply-reserve">
          <h3>SUPPLY RESERVE</h3>

          <Supplies />

          <h5>Allocate</h5>
          <div className="allocate-panel">
            <Allocate />
          </div>

          <h5>Request</h5>
          <div className="request-panel">
            <Request />
          </div>

          <h5>Alerts</h5>
          <div className="alerts-panel"></div>
        </div>

        <div className="pods-section-wrapper">
          <div className="pods-header-wrapper">
            <h3>PODS</h3>
            <span className="filter">FILTER COMPONENT</span>
          </div>
          
          <Pods pods={podData} />

        </div>
      </div>

    </div>
  );
}

export default Dashboard;
