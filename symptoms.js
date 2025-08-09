import { apiFetch } from './api';

export async function addSymptom(symptom, token){ return apiFetch('/api/symptoms', { method:'POST', body: symptom, token }); }
export async function listSymptoms(token){ return apiFetch('/api/symptoms', { token }); }
