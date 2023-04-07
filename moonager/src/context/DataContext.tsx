import { createContext } from 'react'
import { podData } from '../../backend/pods';
import { suppliesData } from '../../backend/supplies';
import { usersData } from '../../backend/users';
import { alertsData } from '../../backend/alerts';

export const DataContext = createContext({
    data: {
        pods: podData,
        supplies: suppliesData,
        users: usersData,
        alerts: alertsData,
    },
    podDataState: podData,
    setPodDataState: {},
    suppliesDataState: suppliesData,
    setSuppliesDataState: {},
    usersDataState: usersData,
    setUsersDataState: {},
    alertsDataState: alertsData,
    setAlertsDataState: {},
    setData: {}
})