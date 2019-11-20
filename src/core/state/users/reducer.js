import { createReducer } from '../../utils/redux';
import { type } from './action';

export const initialState = {
  users: null,
};

export const reducer = {
  [type.SET_USERS](state, { users }) {
    return { ...state, users };
  },
  [type.SET_SELECTED](state, { selected }) {
    return { ...state, selected };
  },
};

export default createReducer(initialState, reducer);
