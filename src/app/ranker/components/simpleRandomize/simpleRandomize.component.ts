import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputElementsComponent } from '../inputElements/inputElements.component';

@Component({
  selector: 'app-simple-randomize',
  standalone: true,
  imports: [
    CommonModule,
    InputElementsComponent,
  ],
  templateUrl: './simpleRandomize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleRandomizeComponent { }
