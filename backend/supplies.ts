import { v4 as uuidv4 } from 'uuid';

import electricIcon from '../moonager/src/assets/electricy.png';
import foodIcon from '../moonager/src/assets/food.png';
import oxygenIcon from '../moonager/src/assets/oxygen.png';
import waterIcon from '../moonager/src/assets/water.png';

export const suppliesArray = [
    {
        id: uuidv4(),
        name: 'Electricity',
        value: 100,
        units: 'mWh',
        icon: electricIcon,
    },
    {
        id: uuidv4(),
        name: 'Food',
        value: 100,
        units: 'Mk',
        icon: foodIcon,

    },
    {
        id: uuidv4(),
        name: 'Oxygen',
        value: 100,
        units: 'ft3',
        icon: oxygenIcon,
    },
    {
        id: uuidv4(),
        name: 'Water',
        value: 100,
        units: 'L',
        icon: waterIcon,
    },
]
