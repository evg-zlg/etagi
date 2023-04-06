import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlat } from '../../types/types';
import { countFlatsOnPage } from '../../const/const';

type initialStateProps = {
  flats: IFlat[];
  conuntOnPage: number;
};
const initialState: initialStateProps = {
  flats: [],
  conuntOnPage: countFlatsOnPage,
};

export const flatsSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    updateFlats(state, action: PayloadAction<IFlat[]>) {
      state.flats = action.payload;
    },
    updateCountFlatsOnPage(state, action: PayloadAction<number>) {
      state.conuntOnPage = action.payload;
    },
  },
});

export const { updateFlats, updateCountFlatsOnPage } = flatsSlice.actions;

export const flatsState = flatsSlice.reducer;
