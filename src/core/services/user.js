import api from './api';

export function listUsers() {
  const token = localStorage.getItem('token');
  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };
  return api.get(`/user/`, params);
}

export function changeAdmin(user, admin) {
  const token = localStorage.getItem('token');
  const params = {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  };

  return api.put(`/user/admin`, { user, admin }, params);
}
