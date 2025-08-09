import React, { createContext, useState, useEffect } from 'react';
import { getMe } from '../services/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('hoc_token') || '');

  useEffect(()=>{
    if(token){
      getMe(token).then(res => {
        if(res && res.username) setUser(res);
        else { setUser(null); setToken(''); localStorage.removeItem('hoc_token'); }
      }).catch(()=>{ setUser(null); });
    }
  }, [token]);

  const login = (tok) => {
    setToken(tok); localStorage.setItem('hoc_token', tok);
  };
  const logout = ()=>{
    setToken(''); setUser(null); localStorage.removeItem('hoc_token');
  };

  return <AuthContext.Provider value={{ user, token, login, logout, setUser }}>{children}</AuthContext.Provider>
}
