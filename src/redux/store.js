import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../reducers/greetingReducer';


const store = configureStore({
  reducer: {
    greetingReducer,
  }
})

export default store;