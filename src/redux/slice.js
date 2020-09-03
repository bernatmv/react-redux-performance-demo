import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  messages: [],
  notMeaningful: [1,2,3],
}

export const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addMessage(
      state,
      action
    ) {
      state.messages = [...state.messages, ...action.payload.messages];
    },
  },
});

export default appSlice.reducer;
