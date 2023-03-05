import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import userReducer from './slices/userSlice';

const makeStore = () => configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true
})

export const wrapper = createWrapper(makeStore);
