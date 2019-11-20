import { combineReducers } from 'redux';
import login from './state/login/reducer';
import users from './state/users/reducer';
import announcements from './state/announcements/reducer';
import denouncements from './state/denouncements/reducer';
import denouncedAnnouncements from './state/denouncedAnnouncements/reducer';

export default combineReducers({
  login,
  announcements,
  denouncements,
  denouncedAnnouncements,
  users,
});
