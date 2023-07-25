import {
  configureStore, ThunkAction, Action, createSlice,
} from '@reduxjs/toolkit';

const tempSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
  },
  reducers: {
    test: (state) => { state.value += 1; },
  },
});

export const store = configureStore({
  reducer: {
    counter: tempSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
