import { useState, createContext } from 'react'
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

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const [time, setTime] = useState(Date.now()); // get and set a snapshot of the time
  const [developerMode, setDeveloperMode] = useState(false);
  
  
  const [podRoute, setPodRoute] = useState('bluefalcon');

  const menuHandler = () => {
      { menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true) }
  }

  console.log(time)

  const [data, setData] = useState({
    pods: podData,
    supplies: suppliesData,
    users: usersData
  });

  return (
    <DataContext.Provider value={{data: data, setData: setData}} >
      <div className="App">

        <div className='background-image' />

        <Routes>
          <Route path='/' element={
            <Navigation 
              menuHandler={menuHandler} 
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
            <Route path='/alerts' element={<Alerts menuIsOpen={menuIsOpen}/>} />
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
