export const type = {
  SET_ANNOUNCEMENTS: 'LOGIN/SET_ANNOUNCEMENTS',
};

export const action = {
  setAnnouncements: announcements => ({
    type: type.SET_ANNOUNCEMENTS,
    announcements,
  }),
};
