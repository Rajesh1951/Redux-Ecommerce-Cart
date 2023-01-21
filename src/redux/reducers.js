import { createReducer } from "@reduxjs/toolkit";

const initial = { cart: [], totalPrice: 0 }
export const custom1 = createReducer(initial, {
  add: (state, action) => {
    const cur_item = action.payload;
    const exist = state.cart.find(e => cur_item.id === e.id);
    state.totalPrice += cur_item.price;
    if (exist) {
      state.cart.forEach(e => {
        if (cur_item.id === e.id) {
          ++e.count;
        }
      });
    }
    else {
      state.cart.push(cur_item);
    }
  },
  remove: (state, action) => {
    const cur_item = action.payload;
    const exist = state.cart.find(e => cur_item.id === e.id);
    if (exist) {
      state.totalPrice -= cur_item.price;
      state.cart.forEach(e => {
        if (cur_item.id === e.id) {
          e.count--;
          if (!e.count) {
            const index = state.cart.indexOf(e);
            state.cart.splice(index, 1);
          }
        }
      });
    }
  },
  removeAll: (state, action) => {
    const cur_item = action.payload;
    const exist = state.cart.find(e => cur_item.id === e.id);
    if (exist) {
      state.totalPrice -= cur_item.price*cur_item.count;
      state.cart.forEach(e => {
        if (cur_item.id === e.id) {
          const index = state.cart.indexOf(e);
          state.cart.splice(index, 1);
        }
      });
    }
  }
})
