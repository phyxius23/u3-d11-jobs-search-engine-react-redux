export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const GET_JOBS = 'GET_JOBS';

// action creators
export const addToFavouriteAction = (company_name) => {
  return { type: ADD_TO_FAVOURITE, payload: company_name }
}

export const removeFromFavouriteAction = (company_name) => {
  return { type: REMOVE_FROM_FAVOURITE, payload: company_name }
}

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    // getState è una funzione che ritorna uno stato globale
    try {
      let response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_JOBS, payload: data});
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }

  }
}