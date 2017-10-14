import { combineReducers } from 'redux';

import all, * as FromAll from './all';
import byId, * as FromById from './byId';

// -----------------------------------------------------------------------------
// REDUCER

const posts = combineReducers({
  all,
  byId,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getById(state, cuid) {
  return FromById.getById(state.byId, cuid);
}

export function getAll(state) {
  return FromAll.getAll(state.all).map(cuid => getById(state, cuid));
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default posts;
