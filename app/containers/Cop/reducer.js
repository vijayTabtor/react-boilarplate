/*
 *
 * Cop reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, SELECTED_ROW } from './constants';
import data from './data';

export const initialState = fromJS({
  data,
  selectedRow: 0,
});

function copReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SELECTED_ROW:
      return state.set('selectedRow', action.id.toString());
    default:
      return state;
  }
}

export default copReducer;
