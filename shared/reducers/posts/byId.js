// -----------------------------------------------------------------------------
// PRIVATES

const defaultState = {};

// -----------------------------------------------------------------------------
// REDUCER

function byId(state = defaultState, action) {
  if (action.type === 'FETCHED_POST') {
    return {
      ...state,
      [action.payload.id]: action.payload,
    };
  }

  return state;
}

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getById(state, id) {
  return state[id];
}

// -----------------------------------------------------------------------------
// EXPORTED REDUCER

export default byId;
