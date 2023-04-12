import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouriteReducer from '../reducers/favouriteReducer';
import jobsReducer from '../reducers/jobsReducer';
import companyReducer from '../reducers/companyReducer';

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  jobs: jobsReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
