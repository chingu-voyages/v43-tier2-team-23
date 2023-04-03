import { v4 as uuidv4 } from 'uuid';

import electricIcon from '../src/assets/electricity.png';
import foodIcon from '../src/assets/food.png';
import oxygenIcon from '../src/assets/oxygen.png';
import waterIcon from '../src/assets/water.png';

export const suppliesData = [
    {
        // id: uuidv4(),
        name: 'Electricity',
        value: 100,
        units: 'mWh',
        icon: electricIcon,
    },
    {
        // id: uuidv4(),
        name: 'Food',
        value: 100,
        units: 'Mcal',
        icon: foodIcon,

    },
    {
        // id: uuidv4(),
        name: 'Oxygen',
        value: 100,
        units: 'kiloliters',
        icon: oxygenIcon,
    },
    {
        // id: uuidv4(),
        name: 'Water',
        value: 100,
        units: 'kiloliters',
        icon: waterIcon,
    },
]