import '../dashboard/dashboard.styles.scss';
import { useState } from 'react';
import { DashboardProps } from './dashboard-types';

function Dashboard(props: DashboardProps) {

    return(
        // ternary function that changes margin-left based on menuIsOpen
        <div className={`dashboard ${props.menuIsOpen ? 'open' : 'closed'}` }> 
            <h1>DASHBOARD</h1>
            <h5>Next resupply is in 12 days</h5>

            <div className='dashboard-wrapper'>
                
                <div className='supply-reserve'>
                    <h3>SUPPLY RESERVE</h3>
                    <div className='supply-panel'>

                    </div>

                    <h5>Allocate</h5>
                    <div className='allocate-panel'>

                    </div>

                    <h5>Request</h5>
                    <div className='request-panel'>

                    </div>

                    <h5>Alerts</h5>
                    <div className='alerts-panel'>

                    </div>
                </div>

                <div className='pods-section-wrapper'>
                    
                    <div className='pods-header-wrapper'>
                        <h3>PODS</h3>
                        <span className='filter'>FILTER COMPONENT</span>
                    </div>

                    <div className='tile-wrapper'>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        <div className='pod-placeholder'></div>
                        
                    </div>

                </div>

            </div>


        </div>

    )
}

export default Dashboard;