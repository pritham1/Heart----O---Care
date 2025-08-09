import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Navbar(){
  const { user, logout } = useAuth();
  return (
    <nav style={{display:'flex',gap:12, padding:10, borderBottom:'1px solid #ddd'}}>
      <Link to="/">Home</Link>
      {user ? <Link to="/dashboard">Dashboard</Link> : <Link to="/login">Login</Link>}
      {user && user.role === 'admin' && <Link to="/admin">Admin</Link>}
      {user ? <button onClick={logout}>Logout</button> : null}
    </nav>
  )
}
