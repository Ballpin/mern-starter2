import { combineReducers } from 'redux';
import posts, * as FromPosts from './posts';

// -----------------------------------------------------------------------------
// REDUCER

const rootReducer = combineReducers({
  posts,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getPostById(state, cuid) {
  return FromPosts.getById(state.posts, cuid);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default rootReducer;
