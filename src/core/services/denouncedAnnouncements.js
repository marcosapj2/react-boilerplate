import api from './api';

export function listDenouncedAnnouncements() {
  const token = localStorage.getItem('token');

  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };
  return api.get(`/anuncios/denuncias`, params);
}
