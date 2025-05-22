import { useState } from 'react'
import './App.css'


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './login/login'
import Homepage from './homepage/homepage'
import RekamMedis from './homepage/RekamMedis'
import TambahPasien from './homepage/TambahPasien'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/homepage" element={<Homepage />}>
            <Route index element={<RekamMedis />} />   {/* Ini akan tampil secara default */}
            <Route path="rekam-medis" element={<RekamMedis />} />
            <Route path="tambah-pasien" element={<TambahPasien />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
