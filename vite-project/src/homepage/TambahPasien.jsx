import React, { useState } from 'react';
import './tambahpasien.css';

function TambahPasien() {
    const [formData, setFormData] = useState({
        nama: '',
        tanggalLahir: '',
        jenisKelamin: '',
        alamat: '',
        noTelp: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Data Pasien:', formData);
        alert('Data Pasien berhasil ditambahkan!');
    };

    return (
        <div className="container">
            <h2 className="title">Tambah Pasien</h2>
            <div className="form-wrapper">
                {/* KIRI */}
                <form className="form-left" onSubmit={handleSubmit}>
                    <label>Nama Pasien:
                        <input type="text" name="nama" value={formData.nama} onChange={handleChange} required />
                    </label>

                    <label>Tanggal Lahir:
                        <input type="date" name="tanggalLahir" value={formData.tanggalLahir} onChange={handleChange} required />
                    </label>

                    <label>Jenis Kelamin:
                        <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange} required>
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </label>

                    <label>Alamat:
                        <input type="text" name="alamat" value={formData.alamat} onChange={handleChange} required />
                    </label>

                    <label>No. Telepon:
                        <input type="tel" name="noTelp" value={formData.noTelp} onChange={handleChange} required />
                    </label>
                </form>

                {/* KANAN */}
                <div className="form-right">
                    <label>Foto Pasien</label>
                    <img
                        src="https://via.placeholder.com/100"
                        alt="Foto Pasien"
                        className="foto-pasien"
                    />
                    <button type="submit" className="btn green" onClick={handleSubmit}>Simpan Rekam</button>
                    <button type="button" className="btn red" onClick={() => alert('Batal simpan!')}>Batal Simpan</button>
                </div>
            </div>
        </div>
    );
}

export default TambahPasien;
