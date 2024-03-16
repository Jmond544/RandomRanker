import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroXCircle } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-input-elements',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIconComponent],
  viewProviders: [provideIcons({ heroXCircle })],
  templateUrl: './inputElements.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputElementsComponent {
  @Output() addListItems = new EventEmitter<string[]>();
  applyForm = new FormGroup({
    textItem: new FormControl(''),
  });

  listaItems: string[] = [];

  verifyEquals(input: string) {
    return this.listaItems.includes(input);
  }

  handleAddItem() {
    if (
      this.applyForm.value.textItem === '' ||
      this.applyForm.value.textItem === null ||
      this.applyForm.value.textItem === undefined
    ) {
      return;
    }
    if (this.verifyEquals(this.applyForm.value.textItem)) {
      return;
    }
    this.listaItems.push(this.applyForm.value.textItem);
    this.addListItems.emit(this.listaItems);
    this.applyForm.reset();
  }

  handleRemoveItem(index: number) {
    this.listaItems.splice(index, 1);
    this.addListItems.emit(this.listaItems);
  }
}
