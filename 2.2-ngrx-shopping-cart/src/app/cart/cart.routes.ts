import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { provideState } from '@ngrx/store';
import { cartReducer } from './cart.reducer';

export const CART_ROUTES: Routes = [
  {
    path: '',
    component: CartPageComponent,
    providers: [provideState({ name: 'cart', reducer: cartReducer })],
  },
];
