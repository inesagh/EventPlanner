import {createSlice} from '@reduxjs/toolkit';

export const modal1Slice = createSlice({
  name: 'typesOfEvents',
  initialState: {
    types: "",
  },
  reducers: {
    changeTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const {changeTypes} = modal1Slice.actions;

export default modal1Slice.reducer;