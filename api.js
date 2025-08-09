export async function apiFetch(path, { method='GET', body=null, token=null, headers={} } = {}){
  const opts = { method, headers: { ...headers } };
  if(token) opts.headers['Authorization'] = 'Bearer ' + token;
  if(body){
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(path, opts);
  const data = await res.json().catch(()=>null);
  if(!res.ok) throw data || { detail: 'Request failed' };
  return data;
}
