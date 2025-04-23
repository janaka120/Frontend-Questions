import { createAction, props } from '@ngrx/store';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const addItem = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);
export const removeItem = createAction(
  '[Cart] Remove Item',
  props<{ id: number }>()
);
export const updateItem = createAction(
  '[Cart] Update Item',
  props<{ id: number; quantity: number }>()
);
