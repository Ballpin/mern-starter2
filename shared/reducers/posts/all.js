// -----------------------------------------------------------------------------
// PRIVATES

const defaultState = [];

// -----------------------------------------------------------------------------
// REDUCER

function all(state = defaultState, action) {
  if (action.type === 'FETCHED_POST') {
    const post = action.payload;
    return state.find(x => post.cuid === x) ? state : [...state, action.payload.cuid];
  }

  return state;
}

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getAll(state) {
  return state;
}

// -----------------------------------------------------------------------------
// EXPORTED REDUCER

export default all;
