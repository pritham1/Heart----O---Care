import React, { useEffect, useState } from 'react';
import SymptomForm from '../components/Symptoms/SymptomForm';
import SymptomList from '../components/Symptoms/SymptomList';
import HospitalList from '../components/Hospitals/HospitalList';
import HospitalMap from '../components/Hospitals/HospitalMap';
import { listHospitals } from '../services/hospitals';

export default function Dashboard(){
  const [hospitals, setHospitals] = useState([]);
  useEffect(()=>{ listHospitals().then(setHospitals).catch(()=>{}); }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:1}}>
          <SymptomForm onAdded={()=>{}} />
          <SymptomList />
        </div>
        <div style={{flex:1}}>
          <HospitalList />
          <HospitalMap hospitals={hospitals} />
        </div>
      </div>
    </div>
  );
}
