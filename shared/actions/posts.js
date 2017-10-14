/* eslint-disable import/prefer-default-export */

function fetching(cuid) {
  return { type: 'FETCHING_POST', payload: cuid };
}

function fetched(post) {
  return { type: 'FETCHED_POST', payload: post };
}

export function fetch(cuid) {
  return (dispatch, getState, { axios }) => {
    dispatch(fetching(cuid));

    return (
      axios
        .get(`/api/posts/${cuid}`)
        .then(({ data }) => dispatch(fetched(data)))
        // We use 'react-jobs' to call our actions.  We don't want to return
        // the actual action to the 'react-jobs' withJob as it will cause
        // the data to be serialized into the react-jobs state by the server.
        // As we already have the state in the redux state tree, which is also
        // getting serialized by the server we will just return a simple "true"
        // here to indicate to react-jobs that all is well.
        .then(() => true)
    );
  };
}
