import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

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

  return (
    <div className="App">
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
  )
}

export default App
