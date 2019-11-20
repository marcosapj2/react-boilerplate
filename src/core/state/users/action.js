export const type = {
  SET_USERS: 'USERS/SET_USERS',
  SET_SELECTED: 'USERS/SET_SELECTED',
};

export const action = {
  setUsers: users => ({ type: type.SET_USERS, users }),
  setSelected: selected => ({ type: type.SET_SELECTED, selected }),
};
