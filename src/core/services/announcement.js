import api from './api';

export function listAnnouncements(tipo) {
  const token = localStorage.getItem('token');

  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    params: { tipo },
  };
  return api.get(`/anuncios/`, params);
}
