import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoublePipe } from './double.pipe';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, DoublePipe],
  template: `
    <h3>Child Component (OnPush)</h3>
    <ul>
      <li *ngFor="let emp of employees; trackBy: trackById">
        {{ emp.name }} (Double ID: {{ emp.id | double }})
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  @Input() employees: { id: number; name: string }[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges', changes);
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
