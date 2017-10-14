import all from '../all';

describe('Posts - all reducer', () => {
  it('Should return the initial state', () => {
    expect(all(undefined, {})).toEqual([]);
  });
});
