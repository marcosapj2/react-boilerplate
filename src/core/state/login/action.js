export const type = {
  SET_USER: 'LOGIN/SET_USER',
};

export const action = {
  setUser: data => ({ type: type.SET_USER, data }),
};
