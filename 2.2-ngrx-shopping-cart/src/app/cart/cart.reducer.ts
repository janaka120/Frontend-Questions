import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface CartState {
  items: CartActions.CartItem[];
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(CartActions.removeItem, (state, { id }) => ({
    ...state,
    items: state.items.filter((i) => i.id !== id),
  })),
  on(CartActions.updateItem, (state, { id, quantity }) => ({
    ...state,
    items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
  }))
);
