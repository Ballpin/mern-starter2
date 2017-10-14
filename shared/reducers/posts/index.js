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

export function getById(state, id) {
  return FromById.getById(state.byId, id);
}

export function getAll(state) {
  return FromAll.getAll(state.all).map(id => getById(state, id));
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default posts;
