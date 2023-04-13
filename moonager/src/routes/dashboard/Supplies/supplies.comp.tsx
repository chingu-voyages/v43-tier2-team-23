import React, { useState, useContext, useEffect } from 'react';
import '../Supplies/supplies.styles.scss';
import { suppliesTypes } from '../Supplies/supplies.types';
import { DataContext } from '../../../context/DataContext';

export const Supplies = () => {
    
    const { suppliesDataState, } = useContext(DataContext);
    
    // notification animation of resource levels changing in pod supply
    useEffect(() => {
        const elements = document.getElementsByClassName('supply-value');
        const animation = [ { color: '#fff' }, { color: '#000' } ];
        for (let i of elements) {
            i.addEventListener('DOMSubtreeModified', () => {
                i.animate(animation, 3000);
            });
        }
    }, []);
    
    
    return(
        <div className='supply-panel'>

            {suppliesDataState.map(item => {
                return(
                    
                <div key={item.name} className='supply-container'>
                    <img src={item.icon} className='supply-icon' />

                    <div className='supply-values'>
                        <h3 className='supply-name'>{item.name}</h3>
                        <h4 className='supply-value'>{item.value} {item.units}</h4>
                    </div>
                </div>

                )
            })}

        </div>
    )
}

            
