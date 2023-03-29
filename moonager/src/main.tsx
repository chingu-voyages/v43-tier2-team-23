import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { BrowserRouter } from 'react-router-dom';
import {UserProvider} from './contexts/test.context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
