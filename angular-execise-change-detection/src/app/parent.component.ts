import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <h2>Parent Component</h2>
    <button (click)="updateCounter()">Increment Counter</button>
    <p>Counter: {{ counter }}</p>
    <app-child [counter]="counter"></app-child>
  `,
})
export class ParentComponent {
  counter = 0;

  updateCounter() {
    this.counter++;
  }
}
