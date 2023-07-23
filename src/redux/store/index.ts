import { configureStore } from '@reduxjs/toolkit';
import notes from '../slice/index';

const store = configureStore({
  reducer: { notes },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
