import { useState } from 'react';

import '../navigation/navigation.styles.scss'
import CloseIcon from '../../assets/icon-close.svg';

function Navigation() {
    const [ isOpen, setIsOpen ] = useState(true);

    const hamburgerHandler = () => {
        { isOpen ? setIsOpen(false) : setIsOpen(true) }
    }

    return (
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

                    <ul className='navlinks'>
                        <li>DASHBOARD</li>
                        <li>RESOURCES</li>
                        <li>ALERTS</li>
                        <li>REQUESTS</li>
                        <li>ACCOUNT</li>
                    </ul>

                    <div className='avatar-placeholder'></div>
                </div>
            }

        </div>
    )
}

export default Navigation