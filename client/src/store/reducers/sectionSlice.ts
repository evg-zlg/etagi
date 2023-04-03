import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateProps = {
  flats: [],
};
const initialState: initialStateProps = {
  flats: [],
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    changeFlats(state, actions: PayloadAction<[]>) {
      state.flats = actions.payload;
    },
  },
});

export const { changeFlats } = flatsSlice.actions;

export const flatsState = flatsSlice.reducer;
