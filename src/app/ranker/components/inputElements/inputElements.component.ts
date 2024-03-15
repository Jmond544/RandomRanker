import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-input-elements',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './inputElements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementsComponent { }
