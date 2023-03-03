import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/random_greeting';

export const fetchMessage = createAsyncThunk('FETCHMESSAGE', () => axios.get(url)
  .then((response) => {
    const greeting = response.data;
    // console.log(greeting);
    return greeting;
  }));

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (_, action) => action.payload);
  },
});

export default greetingsSlice.reducer;
