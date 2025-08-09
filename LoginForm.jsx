import React, { useState } from 'react';
import { login as doLogin } from '../../services/auth';
import useAuth from '../../hooks/useAuth';

export default function LoginForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  async function submit(e){
    e.preventDefault();
    setLoading(true);
    try{
      const token = await doLogin({ username, password });
      login(token);
    }catch(err){
      alert(err.detail || JSON.stringify(err));
    }finally{ setLoading(false); }
  }

  return (
    <form onSubmit={submit}>
      <div><input placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} required /></div>
      <div><input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></div>
      <div><button type="submit" disabled={loading}>{loading ? 'Logging...' : 'Login'}</button></div>
    </form>
  );
}
