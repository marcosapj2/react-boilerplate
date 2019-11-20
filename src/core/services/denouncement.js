import api from './api';

export function listDenouncements() {
  const token = localStorage.getItem('token');

  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };
  return api.get(`/denuncia/`, params);
}
