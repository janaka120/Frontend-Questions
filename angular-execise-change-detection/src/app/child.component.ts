import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h3>Child Component</h3>
    <p>Counter received from parent: {{ counter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  @Input() counter: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent: ngOnChanges', changes);
  }
}
