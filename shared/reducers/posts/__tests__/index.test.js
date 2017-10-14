import posts from '../index';

describe('Posts reducer', () => {
  it('Should return the initial state', () => {
    expect(posts(undefined, {})).toEqual({
      all: [],
      byId: {},
    });
  });
});
