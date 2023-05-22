import { HashRouter, Routes, Route} from "react-router-dom";

import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import DefaultLayout from './layouts/DefaultLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          {/* <Route path='*' element={<ErrorPage />} /> */}

          <Route path='/' element={ <DefaultLayout /> }>
            <Route index element={ <Dashboard /> } />
            <Route path="/transactions" element={ <Transactions /> } />
          </Route>
          
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
