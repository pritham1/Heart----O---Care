import React, { useEffect, useState } from 'react';
import { listSymptoms } from '../../services/symptoms';
import useAuth from '../../hooks/useAuth';

export default function SymptomList(){
  const [items, setItems] = useState([]);
  const { token } = useAuth();
  useEffect(()=>{ if(token) listSymptoms(token).then(setItems).catch(()=>{}); }, [token]);
  return (<div><h3>My Symptoms</h3><ul>{items.map(s=> <li key={s.id}>{s.name} — {s.severity}</li>)}</ul></div>)
}
