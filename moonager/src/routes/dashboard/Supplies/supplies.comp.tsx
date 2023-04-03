import React, { useState, useContext } from 'react';
import '../Supplies/supplies.styles.scss';
import { suppliesTypes } from '../Supplies/supplies.types';
import { DataContext } from '../../../context/DataContext';

export const Supplies = () => {
    
    const {data, setData} = useContext(DataContext);

    /*
    const suppliesUpdate = () => {
        console.log(data)
        console.log(data.supplies)
        setData({...data, supplies: []})
    }
    */
    
    return(
        <div className='supply-panel'>

            {/* <button onClick={suppliesUpdate} ></button> */}

            {data.supplies.map(item => {
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

            
