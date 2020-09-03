import { configureStore, combineReducers } from '@reduxjs/toolkit';

import appReducer, {
  initialState,
} from './slice';

const rootReducer = combineReducers({
  app: appReducer,
});

export const initialAppState = {
  app: initialState,
};


const store = configureStore({
  reducer: rootReducer,
});

export default store;
