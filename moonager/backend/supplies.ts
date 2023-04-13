import { v4 as uuidv4 } from 'uuid';

import electricIcon from '../src/assets/electricity.png';
import foodIcon from '../src/assets/food.png';
import oxygenIcon from '../src/assets/oxygen.png';
import waterIcon from '../src/assets/water.png';

export const suppliesData = [
    {
        name: 'Electricity',
        value: 100,
        units: 'mWh',
        icon: electricIcon,
    },
    {
        name: 'Food',
        value: 10000,
        units: 'Mcal',
        icon: foodIcon,

    },
    {
        name: 'Oxygen',
        value: 1000,
        units: 'kiloliters',
        icon: oxygenIcon,
    },
    {
        name: 'Water',
        value: 100,
        units: 'kiloliters',
        icon: waterIcon,
    },
]