import { useState, createContext, useEffect } from 'react'
import './App.css'
import { Routes, Route, } from 'react-router-dom';
import { DataContext } from './context/DataContext';
import { podData } from '../backend/pods';
import { suppliesData } from '../backend/supplies';
import { usersData } from '../backend/users';

// Routes
import Navigation from '../src/routes/navigation/navigation.comp';
import Dashboard from '../src/routes/dashboard/dashboard.comp';
import Resources from '../src/routes/resources/resources.comp';
import Alerts from '../src/routes/alerts/alerts.comp';
import Requests from '../src/routes/requests/requests.comp';
import Account from '../src/routes/account/account.comp';
import PodDetails from '../src/routes/pod-details/pod-details.comp';
import { alertsData } from '../backend/alerts';
import { newAlert } from './context/dataUtils';
import instantiateUsers from '../controller/resourceDrainage';
import { PodType } from './routes/dashboard/Pods/pods.types';

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [time, setTime] = useState(Date.now()); // get and set a snapshot of the time
  const [developerMode, setDeveloperMode] = useState(false);
  const [podDataState, setPodDataState] = useState(podData);
  const [suppliesDataState, setSuppliesDataState] = useState(suppliesData);
  const [usersDataState, setUsersDataState] = useState(usersData);
  const [alertsDataState, setAlertsDataState] = useState(alertsData);

  const [podRoute, setPodRoute] = useState('bluefalcon');

  const menuHandler = () => {
      { menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true) }
  }

  const menuHandler2 = () => {
    { menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true) }
  }

  const [alertThreshold, setAlertThreshold] = useState(600);
  useEffect(() => {
    //@ts-ignore
    setAlertsDataState(newAlert(podDataState, alertThreshold));
  }, [podDataState, alertThreshold]);
  
  // Resource Drainage
  useEffect(() => {
    // Creates a new array of pods with updated resource information. Since it is an array of objects, that data is updated by reference via prototypal inheritance in js.
    // const updatedCalorieData = podDataState.map((pod)=>{
      podDataState.forEach((pod) => {

      // Calories
      pod.supplies.food = parseFloat(
        (pod.supplies.food - 
          pod.calorieExpenditure)
          .toFixed(3));
      
      // Oxygen
      pod.supplies.oxygen = parseFloat(
        (pod.supplies.oxygen - 
          pod.oxygenExpenditure)
          .toFixed(3));

      // Water
      pod.supplies.water = parseFloat(
        (pod.supplies.water - 
          pod.waterExpenditure)
          .toFixed(3));

      // Electricity
      pod.supplies.electricity = parseFloat(
        (pod.supplies.electricity - 
          pod.electricityExpenditure)
          .toFixed(3));

    })
  }, [time]);

  return (
    <DataContext.Provider value={{podDataState, setPodDataState, suppliesDataState, setSuppliesDataState, usersDataState, setUsersDataState, alertsDataState, setAlertsDataState}} >
      <div className="App">

        <div className='background-image' />

        <Routes>
          <Route path='/' element={
            <Navigation 
              menuHandler={menuHandler}
              menuHandler2={menuHandler2}
              menuIsOpen={menuIsOpen} 
              time={time} 
              setTime={setTime} 
              developerMode={developerMode} 
              setDeveloperMode={setDeveloperMode} 
            />
            }>

            <Route index element={
              <Dashboard 
                menuIsOpen={menuIsOpen} 
                time={time} 
                setTime={setTime} 
                developerMode={developerMode} 
                setDeveloperMode={setDeveloperMode}
                podRoute={podRoute}
                setPodRoute={setPodRoute}
              />} 
            />
            
            <Route path='/resources' element={<Resources menuIsOpen={menuIsOpen}/>} />
            <Route path='/alerts' element={<Alerts menuIsOpen={menuIsOpen} alertThreshold={alertThreshold} setAlertThreshold={setAlertThreshold}/>} />
            <Route path='/requests' element={<Requests menuIsOpen={menuIsOpen}/>} />
            <Route path='/account' element={<Account menuIsOpen={menuIsOpen}/>} />
            
            <Route path='/pod-details' element={
              <PodDetails 
                menuIsOpen={menuIsOpen} 
                podRoute={podRoute} 
              />} 
            />



          </Route>
        </Routes>

      </div>
    </DataContext.Provider>
  )
}

export default App