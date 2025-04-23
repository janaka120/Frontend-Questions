import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  template: `<app-parent></app-parent>`,
})
export class AppComponent {
  title = 'angular-execise-change-detection';
}
