export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const GET_JOBS = 'GET_JOBS';
export const GET_COMPANY = 'GET_COMPANY';

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

export const getCompanyAction = (baseEndpoint, paramsCompany) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + paramsCompany);
      if (response.ok) {
        const { data } = await response.json();
        console.log(data)
        dispatch({type: GET_COMPANY, payload: data});
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }
}