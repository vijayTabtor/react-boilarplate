/*
 *
 * Cop actions
 *
 */

import { DEFAULT_ACTION, SELECTED_ROW } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function selectRow(id) {
  return {
    type: SELECTED_ROW,
    id,
  };
}
