import React, { useState } from 'react';
import { register as doRegister } from '../../services/auth';

export default function RegisterForm(){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e){
    e.preventDefault();
    setLoading(true);
    try{
      await doRegister({ username, email, password });
      alert('Registered. Please login.');
    }catch(err){
      alert(err.detail || JSON.stringify(err));
    }finally{ setLoading(false); }
  }

  return (
    <form onSubmit={submit}>
      <div><input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} required /></div>
      <div><input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} required /></div>
      <div><input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div>
      <div><button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button></div>
    </form>
  );
}
