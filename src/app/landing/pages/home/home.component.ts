import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  heroCodeBracketSquare,
  heroArrowRightCircle,
} from '@ng-icons/heroicons/outline';

@Component({
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  viewProviders: [
    provideIcons({ heroCodeBracketSquare, heroArrowRightCircle }),
  ],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
