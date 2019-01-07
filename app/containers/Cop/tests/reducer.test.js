import { fromJS } from 'immutable';
import copReducer from '../reducer';

describe('copReducer', () => {
  it('returns the initial state', () => {
    expect(copReducer(undefined, {})).toEqual(fromJS({}));
  });
});
