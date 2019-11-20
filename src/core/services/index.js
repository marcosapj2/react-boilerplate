import { login } from './auth';
import { listUsers, changeAdmin } from './user';
import { listDenouncements } from './denouncement';
import { listDenouncedAnnouncements } from './denouncedAnnouncements';
import { listAnnouncements } from './announcement';
import { listNotifications, readAllNotifications } from './notifications';

export {
  login,
  listUsers,
  listDenouncements,
  listAnnouncements,
  listDenouncedAnnouncements,
  listNotifications,
  readAllNotifications,
  changeAdmin,
};
