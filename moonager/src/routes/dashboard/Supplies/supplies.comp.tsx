import React from 'react';
import '../Supplies/supplies.styles.scss';
import { suppliesArray } from '../../../../../backend/supplies';
import { suppliesTypes } from '../Supplies/supplies.types';

export const Supplies = ( props: suppliesTypes ) => {
    const data = suppliesArray;

    return(
        <div className='supply-panel'>

            {data.map(item => {
                return(
                    
                <div key={item.id} className='supply-container'>
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

            
