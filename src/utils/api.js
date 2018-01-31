import queryString from 'query-string'
// const queryString = require('query-string')

export async function fetchAllPositions () {
  const response = await fetch(`${process.env.SEQ_API_BASE}/create-sequence`)
    .catch(handleError);

  const positions = await response.json();

  return positions
}

export async function createSequence ({no_of_moves, level}) {
  const url = `${process.env.REACT_APP_SEQ_API_BASE}/create-sequence`

  const query = {
    no_of_moves,
    level,
  }

  const stringified = queryString.stringify(query)

  const urlWithParams = url + '?' + stringified

  console.log(urlWithParams)

  const response = await fetch(urlWithParams)
    .catch(handleError);

  const sequence = await response.json();

  return sequence
}

function handleError (error) {
  console.warn(error);
  return null;
}
