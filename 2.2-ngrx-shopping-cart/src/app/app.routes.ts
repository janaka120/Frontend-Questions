import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.routes').then((m) => m.CART_ROUTES),
  },
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];
