import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { flatsState } from './reducers/sectionSlice';
import { sectionApi } from './reducers/section.api';

export const rootReducer = combineReducers({
  flatsState,
  [sectionApi.reducerPath]: sectionApi.reducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sectionApi.middleware),
  });

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export { store };

store.getState();
