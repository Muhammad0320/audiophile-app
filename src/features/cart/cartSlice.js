import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.productID !== action.payload
      );
    },

    addItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productID === action.payload);

      item.quantity++;

      item.totalPrice = item.quantity * item.unitPrice;
    },

    removeItemQuantity(state, action) {
      const item = state.cart.find((item) => item.productID === action.payload);

      item.quantity--;

      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;

export const {
  addItem,
  addItemQuantity,
  removeItemQuantity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart?.cart.reduce((acc, curr) => acc + curr?.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart?.cart?.reduce((acc, curr) => acc + curr.totalPrice, 0);

export const getCurrentItemQuantityById = (id) => (state) =>
  state.cart?.cart?.find((item) => item.productID === id)?.quantity ?? 0;
