import { Component, OnInit } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectItems,
  selectItemCount,
  selectTotalPrice,
} from '../cart.selectors';
import { addItem, removeItem, CartItem, updateItem } from '../cart.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './cart-page.component.html',
})
export class CartPageComponent implements OnInit {
  items$!: Observable<CartItem[]>;
  itemCount$!: Observable<number>;
  total$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.items$ = this.store.select(selectItems);
    this.itemCount$ = this.store.select(selectItemCount);
    this.total$ = this.store.select(selectTotalPrice);
  }

  addSample() {
    this.store.dispatch(
      addItem({
        item: { id: Date.now(), name: 'Sample Item', price: 50, quantity: 1 },
      })
    );
  }

  remove(id: number) {
    this.store.dispatch(removeItem({ id }));
  }

  updateQuantity(id: number, event: Event) {
    const target = event.target as HTMLInputElement; // Safely cast target to HTMLInputElement
    const quantity = parseInt(target.value, 10); // Get value as a number
    if (!isNaN(quantity) && quantity > 0) {
      this.store.dispatch(updateItem({ id, quantity }));
    }
  }
}
