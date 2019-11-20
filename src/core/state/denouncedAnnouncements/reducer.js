import { createReducer } from '../../utils/redux';
import { type } from './action';

export const initialState = {
  denouncedAnnouncements: null,
};

export const reducer = {
  [type.SET_ANNOUNCEMENTS](state, { denouncedAnnouncements }) {
    return { ...state, denouncedAnnouncements };
  },
};

export default createReducer(initialState, reducer);
