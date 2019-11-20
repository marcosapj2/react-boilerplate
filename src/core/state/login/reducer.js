import { createReducer } from '../../utils/redux';
import { type } from './action';

export const initialState = {
  user: {},
};

export const reducer = {
  [type.SET_USER](state, { data }) {
    return { ...state, data };
  },
};

export default createReducer(initialState, reducer);
