import { createReducer } from '../../utils/redux';
import { type } from './action';

export const initialState = {
  announcements: null,
};

export const reducer = {
  [type.SET_ANNOUNCEMENTS](state, { announcements }) {
    return { ...state, announcements };
  },
};

export default createReducer(initialState, reducer);
