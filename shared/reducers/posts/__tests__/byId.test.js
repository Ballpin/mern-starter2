import byId from '../byId';

describe('Posts - byId reducer', () => {
  it('Should return the initial state', () => {
    expect(byId(undefined, {})).toEqual({});
  });
});
