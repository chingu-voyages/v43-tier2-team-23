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

function App() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  const menuHandler = () => {
      { menuIsOpen ? setMenuIsOpen(false) : setMenuIsOpen(true) }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation menuHandler={menuHandler} menuIsOpen={menuIsOpen} />}>

          <Route index element={<Dashboard menuIsOpen={menuIsOpen}/>} />
          <Route path='/resources' element={<Resources menuIsOpen={menuIsOpen}/>} />
          <Route path='/alerts' element={<Alerts menuIsOpen={menuIsOpen}/>} />
          <Route path='/requests' element={<Requests menuIsOpen={menuIsOpen}/>} />
          <Route path='/account' element={<Account menuIsOpen={menuIsOpen}/>} />

        </Route>
      </Routes>

    </div>
  )
}

export default App
