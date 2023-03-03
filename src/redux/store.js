import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from '../reducers/greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingsSlice,
  },
});

export default store;
