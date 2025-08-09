import { apiFetch } from './api';

export async function register({ username, email, password }){
  return apiFetch('/api/auth/register', { method:'POST', body: { username, email, password } });
}

export async function login({ username, password }){
  // oauth2 password form
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);
  const res = await fetch('/token', { method:'POST', body: params, headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
  if(!res.ok) throw await res.json();
  const data = await res.json();
  return data.access_token;
}

export async function getMe(token){
  return apiFetch('/api/me', { token });
}
