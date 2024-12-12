import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-reusable-from',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './reusable-from.component.html',
    styleUrl: './reusable-from.component.css'
})
export class ReusableFromComponent {
  @Input() fields: any[] = [];
  @Input() form!: FormGroup;
  @Input() submitButtonText = 'Submit';
  @Output() formSubmit = new EventEmitter<any>();

  handleSubmit() {
    if (this.form.valid) {
      console.log('Emitting Form:', this.form.value); // Debug log
      this.formSubmit.emit(this.form.value);
    } else {
      console.log('Form Invalid:', this.form.errors);
    }
  }
}
