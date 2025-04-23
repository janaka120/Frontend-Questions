import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: `
    <h2>Parent Component</h2>
    <button (click)="addEmployee()">Add Employee</button>
    <ul>
      <li *ngFor="let emp of employees">{{ emp.name }}</li>
    </ul>

    <app-child [employees]="employees"></app-child>
  `,
})
export class ParentComponent {
  employees = [
    { id: 1, name: 'Jesan' },
    { id: 2, name: 'Adam' },
  ];

  addEmployee() {
    const newId = Date.now();
    this.employees = [
      ...this.employees,
      { id: newId, name: `Newbie ${newId}` },
    ];
  }
}
