import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../../../app.routes';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCodeBracketSquare } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIconComponent],
  viewProviders: [provideIcons({ heroCodeBracketSquare })],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HeaderComponent {
  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route.path !== '')
    .filter((route) => !route.path?.includes(':'));
}
