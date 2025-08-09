import { apiFetch } from './api';

export async function listHospitals(){ return apiFetch('/api/hospitals'); }
export async function adminCreateHospital(hospital, token){ return apiFetch('/api/admin/hospitals', { method:'POST', body: hospital, token }); }
export async function adminDeleteHospital(id, token){ return apiFetch(`/api/admin/hospitals/${id}`, { method:'DELETE', token }); }
