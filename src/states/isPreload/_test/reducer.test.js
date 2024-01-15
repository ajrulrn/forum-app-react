import { describe, expect, it } from 'vitest';
import isPreloadReducer from '../reducer';

describe('isPreloadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = true;
    const action = { type: 'UNKNOWN' };
    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return the isPreload when given by SET_IS_PRELOAD function', () => {
    const initialState = true;
    const action = {
      type: 'SET_IS_PRELOAD',
      payload: {
        isPreload: false,
      },
    };
    const nextState = isPreloadReducer(initialState, action);

    expect(nextState).toEqual(action.payload.isPreload);
  });
});
