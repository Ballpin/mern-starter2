// -----------------------------------------------------------------------------
// PRIVATES

const defaultState = {};

// -----------------------------------------------------------------------------
// REDUCER

function byId(state = defaultState, action) {
  if (action.type === 'FETCHED_POST') {
    return {
      ...state,
      [action.payload.cuid]: action.payload,
    };
  }

  return state;
}

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getById(state, cuid) {
  return state[cuid];
}

// -----------------------------------------------------------------------------
// EXPORTED REDUCER

export default byId;
