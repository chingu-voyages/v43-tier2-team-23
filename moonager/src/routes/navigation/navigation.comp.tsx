import { useState, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../navigation/navigation.styles.scss'
import CloseIcon from '../../assets/icon-close.svg';

type NavigationProps = {
    menuHandler: () => void,
    menuIsOpen: boolean
}

function Navigation(props: NavigationProps) {

    return (
        <Fragment>
        <div className="navigation">
            
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