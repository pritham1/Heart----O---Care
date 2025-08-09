import React, { useState } from 'react';

export default function ResetPassword(){
  const [email, setEmail] = useState('');
  async function submit(e){ e.preventDefault(); const res = await fetch('/api/forgot-password', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) }); const j = await res.json(); if(j.reset_link) alert('Reset link (dev): ' + j.reset_link); else alert('If SMTP configured, reset email sent.'); }
  return (<form onSubmit={submit}><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" required /><button type="submit">Send Reset</button></form>)
}
