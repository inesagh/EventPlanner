import {createSlice} from '@reduxjs/toolkit';

export const modal2Slice = createSlice({
  name: 'makeEventFromService',
  initialState: {
    makeEvent: 1,
  },
  reducers: {
    eventFrom: (state, action) => {
      state.makeEvent = action.payload;
    },
  },
});

export const {eventFrom} = modal2Slice.actions;

export default modal2Slice.reducer;