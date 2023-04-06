import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlat } from '../../Models/FlatModel';
import { countFlatsOnPage } from '../../const/const';

type initialStateProps = {
  flats: IFlat[];
  countOnPage: number;
};
const initialState: initialStateProps = {
  flats: [],
  countOnPage: countFlatsOnPage,
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    updateFlats(state, action: PayloadAction<IFlat[]>) {
      state.flats = action.payload;
    },
    updateCountFlatsOnPage(state, action: PayloadAction<number>) {
      state.countOnPage = action.payload;
    },
  },
});

export const { updateFlats, updateCountFlatsOnPage } = flatsSlice.actions;

export const flatsState = flatsSlice.reducer;
