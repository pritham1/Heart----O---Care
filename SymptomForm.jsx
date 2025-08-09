import React, { useState } from 'react';
import { addSymptom } from '../../services/symptoms';
import useAuth from '../../hooks/useAuth';

export default function SymptomForm({ onAdded }){
  const [name, setName] = useState('');
  const [severity, setSeverity] = useState('mild');
  const { token } = useAuth();
  async function submit(e){
    e.preventDefault();
    try{ await addSymptom({ name, severity }, token); setName(''); onAdded && onAdded(); }
    catch(err){ alert(err.detail || JSON.stringify(err)); }
  }
  return (
    <form onSubmit={submit}>
      <input placeholder="symptom" value={name} onChange={e=>setName(e.target.value)} required />
      <select value={severity} onChange={e=>setSeverity(e.target.value)}><option value="mild">Mild</option><option value="moderate">Moderate</option><option value="severe">Severe</option></select>
      <button type="submit">Add</button>
    </form>
  )
}
