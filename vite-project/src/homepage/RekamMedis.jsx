import React from 'react'
import './rekam-medis.css'
import { useNavigate } from 'react-router-dom'

const patients =[
  { id: 1, name: 'Udin', code: 'RM-00092/006', date: '5 April', diagnosis: 'Asma' },
  { id: 2, name: 'Fathimah', code: 'RM-00003/006', date: '5 April', diagnosis: 'Jantung' },
  { id: 3, name: 'Ahmad', code: 'RM-00004/007', date: '9 April', diagnosis: 'Bronkitis' },
  { id: 4, name: 'Cecep', code: 'RM-00007/008', date: '13 April', diagnosis: 'Diabetes' },
  { id: 5, name: 'Fitri', code: 'RM-00009/007', date: '14 April', diagnosis: 'Kanker' },
  { id: 6, name: 'Winda', code: 'RM-00010/009', date: '15 April', diagnosis: 'Cacar' },
  { id: 7, name: 'Mila', code: 'RM-00011/007', date: '23 April', diagnosis: 'Kudis' },
]


function RekamMedis() {

  const navigate = useNavigate()

  const handleTambahPasien = () => {
    navigate('/homepage/tambah-pasien')
  }


  return (
    <>
    <div className="rekam-container">
      <h2 className='rekam-title'>Rekam Medis</h2>

      <div className="rekam-control">
        <input type="text" placeholder='Search'className='search-input'/>

        <div className="filter-group">
          <select className='select-filter'>
          <option>Januari</option>
          <option>Febuary</option>
          <option>Maret</option>
          <option>April</option>
          <option>Mei</option>
          <option>Juni</option>
          <option>Juli</option>
          <option>Agustus</option>
          <option>September</option>
          <option>Oktober</option>
          <option>November</option>
          <option>Desember</option>
          </select>

          <select className='select-filter'>
          <option>2025</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          </select>
        </div>
        <button onClick={handleTambahPasien} className="btn-tambah">Tambah Pasien</button>    
      </div>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Pasien</th>
            <th>Foto</th>
            <th>No. Rekam Medis</th>
            <th>Tgl</th>
            <th>Diagnosa</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td><img src="/src/assets/user.png" alt="foto" className="foto-pasien" /></td>
              <td>{p.code}</td>
              <td>{p.date}</td>
              <td>{p.diagnosis}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default RekamMedis