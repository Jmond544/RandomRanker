import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputElementsComponent } from '../inputElements/inputElements.component';
import { ResultElementsComponent } from '../resultElements/resultElements.component';

@Component({
  selector: 'app-simple-randomize',
  standalone: true,
  imports: [
    CommonModule,
    InputElementsComponent,
    ResultElementsComponent
  ],
  templateUrl: './simpleRandomize.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleRandomizeComponent {
  listaItems: string[] = [];
  randomizeList: string[] = [];

  handleAddListItems(items: string[]) {
    this.listaItems = items;
    console.log(this.listaItems);
  }

  handleRandomizeList() {
    if (this.listaItems.length === 0) {
      return;
    }
    this.randomizeList = this.listaItems.sort(() => Math.random() - 0.5);
  }
 }
