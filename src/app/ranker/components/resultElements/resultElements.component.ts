import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-elements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultElements.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ResultElementsComponent {
  @Input() public listResult: String[] = [];
}
