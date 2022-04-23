/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import orders from './orders';

export const reducer = combineReducers({
  // reducers go here
  orders,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
