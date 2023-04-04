import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlat } from '../../types/types';

type initialStateProps = {
  flats: IFlat[],
};
const initialState: initialStateProps = {
  flats: [],
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    updateFlats(state, actions: PayloadAction<IFlat[]>) {
      state.flats = actions.payload;
    },
  },
});

export const { updateFlats } = flatsSlice.actions;

export const flatsState = flatsSlice.reducer;
