import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // console.log("add items...",state,action);
      const item = action.payload;
      const existing = state.items.find(i => i.name === item.name);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, delta } = action.payload;
      console.log("payload-->",state.payload)
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          state.items = state.items.filter(i => i.name !== name);
        }
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
