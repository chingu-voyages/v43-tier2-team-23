import { useState, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { NavigationProps } from './navigation-types';

import Clock from './Clock/Clock';
import DeveloperModeSwitch from './DeveloperModeSwitch/DeveloperModeSwitch';
import AlertIcon from './AlertsIcon/AlertsIcon';

import '../navigation/navigation.styles.scss'
import CloseIcon from '../../assets/icon-close.svg';

function Navigation(props:{ menuHandler:Function, menuIsOpen:boolean, time:number, setTime:Function, developerMode:boolean, setDeveloperMode:Function }) {

    return (
        <Fragment>
        <div className="navigation">

        <div className='background-image' />
        
        <div className='time-bar'>
            <div>
                <DeveloperModeSwitch developerMode={props.developerMode} setDeveloperMode={props.setDeveloperMode} /> 
                <p>Developer Mode</p>   
            </div>
            <Clock time={props.time} setTime={props.setTime} developerMode={props.developerMode}/>
            <AlertIcon time={props.time}/>
        </div>
                    
            { !props.menuIsOpen ?
                <div className='closedNav'>
                    <h4>LOGO</h4>
                    
                    <div className='hamburger' onClick={props.menuHandler}>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </div>

                    <div className='avatar-placeholder'></div>

                </div>
            :
                <div className='openNav'>
                    <h4>OPEN LOGO</h4>

                    <img src={CloseIcon} onClick={props.menuHandler} className='close-icon'></img>

                    <div className='navlinks'>
                        <Link to='/' onClick={props.menuHandler} className='link'>DASHBOARD</Link>
                        <Link to='/resources' onClick={props.menuHandler} className='link'>RESOURCES</Link>
                        <Link to='/alerts' onClick={props.menuHandler} className='link'>ALERTS</Link>
                        <Link to='/requests' onClick={props.menuHandler} className='link'>REQUESTS</Link>
                        <Link to='/account' onClick={props.menuHandler} className='link'>ACCOUNT</Link>
                    </div>

                    <div className='avatar-placeholder'></div>
                </div>
            }

        </div>
        <Outlet />
        </Fragment>
        
    )
}

export default Navigation