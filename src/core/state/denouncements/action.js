export const type = {
  SET_DENOUNCEMENTS: 'LOGIN/SET_DENOUNCEMENTS',
};

export const action = {
  setDenouncements: denouncements => ({
    type: type.SET_DENOUNCEMENTS,
    denouncements,
  }),
};
