import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cop state domain
 */

const selectCopDomain = state => state.get('cop', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Cop
 */

const makeSelectCop = () =>
  createSelector(selectCopDomain, substate => substate.toJS());

export default makeSelectCop;
export { selectCopDomain };
