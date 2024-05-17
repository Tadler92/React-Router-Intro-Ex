import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Cookies from './Cookies'
import Drinks from './Drinks'
import NavBar from './NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/chips' element={<Chips />} />
          <Route path='/cookies' element={<Cookies />} />
          <Route path='/drinks' element={<Drinks />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
