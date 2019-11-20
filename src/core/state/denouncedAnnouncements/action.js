export const type = {
  SET_ANNOUNCEMENTS: 'DENOUNCED_ANNOUNCEMENTS/SET_ANNOUNCEMENTS',
};

export const action = {
  setDenouncedAnnounements: denouncedAnnouncements => ({
    type: type.SET_ANNOUNCEMENTS,
    denouncedAnnouncements,
  }),
};
