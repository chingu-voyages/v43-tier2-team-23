import { useState, Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../navigation/navigation.styles.scss'
import CloseIcon from '../../assets/icon-close.svg';

function Navigation() {
    const [ isOpen, setIsOpen ] = useState(true);

    const hamburgerHandler = () => {
        { isOpen ? setIsOpen(false) : setIsOpen(true) }
    }

    return (
        <Fragment>
        <div className="navigation">
            
            { !isOpen ?
                <div className='closedNav'>
                    <h4>LOGO</h4>
                    
                    <div className='hamburger' onClick={hamburgerHandler}>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                        <span className='hamburger-line'></span>
                    </div>

                    <div className='avatar-placeholder'></div>

                </div>
            :
                <div className='openNav'>
                    <h4>OPEN LOGO</h4>

                    <img src={CloseIcon} onClick={hamburgerHandler} className='close-icon'></img>

                    <div className='navlinks'>
                        <Link to='/' onClick={hamburgerHandler} className='link'>DASHBOARD</Link>
                        <Link to='/resources' onClick={hamburgerHandler} className='link'>RESOURCES</Link>
                        <Link to='/alerts' onClick={hamburgerHandler} className='link'>ALERTS</Link>
                        <Link to='/requests' onClick={hamburgerHandler} className='link'>REQUESTS</Link>
                        <Link to='/account' onClick={hamburgerHandler} className='link'>ACCOUNT</Link>
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