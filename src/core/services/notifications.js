import api from './api';

export function listNotifications() {
  const token = localStorage.getItem('token');

  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  return api.get(`/notificacoes`, params);
}

export function readAllNotifications() {
  const token = localStorage.getItem('token');

  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  return api.put(`/notificacoes/ler_todos`, {}, params);
}
