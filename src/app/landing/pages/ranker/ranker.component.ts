import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SimpleRandomizeComponent } from '../../../ranker/components/simpleRandomize/simpleRandomize.component';

@Component({
  selector: 'app-ranker',
  standalone: true,
  imports: [
    CommonModule,
    SimpleRandomizeComponent,
  ],
  templateUrl: './ranker.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RankerComponent { }
