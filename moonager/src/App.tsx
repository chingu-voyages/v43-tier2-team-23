import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

// Routes
import Navigation from '../src/routes/navigation/navigation.comp';
import Dashboard from '../src/routes/dashboard/dashboard.comp';
import Resources from '../src/routes/resources/resources.comp';
import Alerts from '../src/routes/alerts/alerts.comp';
import Requests from '../src/routes/requests/requests.comp';
import Account from '../src/routes/account/account.comp';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>

          <Route index element={<Dashboard />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/alerts' element={<Alerts />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/account' element={<Account />} />

        </Route>
      </Routes>

    </div>
  )
}

export default App
