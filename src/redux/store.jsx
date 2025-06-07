import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../redux/Slices/productSlice';
import appSlice from '../redux/Slices/appSlice';
import basketSlice from '../redux/Slices/basketSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    product: productSlice,
    basket: basketSlice,
  },
});


