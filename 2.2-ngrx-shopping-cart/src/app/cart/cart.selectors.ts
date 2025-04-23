import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectItems = createSelector(
  selectCartState,
  (state) => state.items
);
export const selectItemCount = createSelector(selectItems, (items) =>
  items.reduce((count, item) => count + item.quantity, 0)
);
export const selectTotalPrice = createSelector(selectItems, (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
