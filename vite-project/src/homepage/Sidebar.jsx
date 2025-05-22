import React from 'react'
import './sidebar.css'
import {FaUser, FaFileMedical, FaSignOutAlt, FaFile} from 'react-icons/fa'
import Logo from '../assets/RumahSakit.png'


function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="logo">
            <img src={Logo} alt="Logo Klinik"/>
            <h2>Rumah Sakit Pelita</h2>
        </div>

        <nav className="nav">
            <a href="#" className='link'>
                <FaFileMedical className='icon'/>
                Rekam Medis
            </a>

            <a href="#" className='link'>
                <FaUser className='icon'/>
                Olah Data Pasien
            </a>

            <a href="#" className='link'>
                <FaFileMedical className='icon'/>
                Laporan
            </a>

            <a href="#" className='link'>
                <FaSignOutAlt className='icon'/>
                Keluar
            </a>
        </nav>
    </div>
    </>
  )
}

export default Sidebar