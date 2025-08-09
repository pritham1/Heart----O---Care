import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { adminCreateHospital } from '../services/hospitals';

export default function AdminPanel(){
  const [name, setName] = useState('');
  const [lat, setLat] = useState('28.64');
  const [lng, setLng] = useState('77.23');
  const { token, user } = useAuth();
  if(!user || user.role !== 'admin') return <div>Not authorized</div>;
  async function submit(e){
    e.preventDefault();
    try{ await adminCreateHospital({ name, lat: parseFloat(lat), lng: parseFloat(lng) }, token); alert('Added'); }
    catch(err){ alert(err.detail || JSON.stringify(err)); }
  }
  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={submit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="name" required />
        <input value={lat} onChange={e=>setLat(e.target.value)} placeholder="lat" required />
        <input value={lng} onChange={e=>setLng(e.target.value)} placeholder="lng" required />
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  )
}
