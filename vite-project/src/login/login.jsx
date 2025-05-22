import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

import PasswordIcon from '../assets/password.png'
import UserIcon from '../assets/user.png'
import Logo from '../assets/RumahSakit.png'

const login = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        //Mengecek username dan password
        if (username === 'admin' && password === 'control123') {
            // Jika berhasil, arahkan ke homepage
            navigate('/homepage')
        } else {
            alert('Username atau password salah')
        }
    }

  return (
    <>
        <div className="container">
            <div className="header">
                <img src={Logo} alt="Logo" className="logo" />
                <h3 className="welcoming">Selamat Datang</h3>
                <h1 className="title">Rumah Sakit Pelita</h1>
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <label>Username</label>
                    <img src={UserIcon} alt="" />
                    <input type="text" 
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input">
                    <label>Password</label>
                    <img src={PasswordIcon} alt="" />
                    <input type="password" 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="forget-password">Forget Password <span>Click Here!</span></div>
            <div className="submit-container">
                <button className="submit" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </>
  )
}

export default login