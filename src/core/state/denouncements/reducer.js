import { createReducer } from '../../utils/redux';
import { type } from './action';

export const initialState = {
  denouncements: null,
};

export const reducer = {
  [type.SET_DENOUNCEMENTS](state, { denouncements }) {
    return { ...state, denouncements };
  },
};

export default createReducer(initialState, reducer);
