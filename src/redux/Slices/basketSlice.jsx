// redux/Slices/basketSlice.jsx

import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
    totalAmount: 0,
    drawer: false,
  },
  reducers: {
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    addToBasket: (state, action) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.count += action.payload.count;
      } else {
        state.products.push(action.payload);
      }
      state.totalAmount += action.payload.price * action.payload.count;
    },
    removeFromBasket: (state, action) => {
      const productIndex = state.products.findIndex((p) => p.id === action.payload);
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.totalAmount -= product.price * product.count;
        state.products.splice(productIndex, 1);
      }
    },
  },
});

export const { setDrawer, addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
