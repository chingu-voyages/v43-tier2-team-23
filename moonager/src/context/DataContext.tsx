import { createContext } from 'react'
import { podData } from '../../backend/pods';
import { suppliesData } from '../../backend/supplies';
import { usersData } from '../../backend/users';

export const DataContext = createContext({
    data: {
        pods: podData,
        supplies: suppliesData,
        users: usersData 
    },
    setData: {}
})