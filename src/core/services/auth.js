import api from './api';

export function login(data) {
  const params = { headers: { 'Content-Type': 'application/json' } };
  return api.post(`/auth/login`, data, params);
}
