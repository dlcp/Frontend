import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  title = 'frontend';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), this.validateNameLength]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('.+@.+')]],
      phone: ['', [Validators.required, Validators.pattern('^0[9][0-9]{8}$')]],
      birthday: ['', Validators.required] 
    });
  }

  submitForm() {
    console.log('Formulario:', this.form.value); 
    if (this.form.valid) {
      alert('Los datos del formulario han sido ingresados correctamente');
    } else {
      let errorMessage = 'Por favor, complete todos los campos correctamente.\n';
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control) {
          const controlErrors = control.errors;
          if (controlErrors != null) {
            Object.keys(controlErrors).forEach(keyError => {
              errorMessage += `- ${this.getErrorMessage(key, keyError)}\n`;
            });
          }
        }
      });
      alert(errorMessage);
    }
  }
  

  isInvalid(controlName: string) {
    const control = this.form.get(controlName);
    return control && control.invalid && (control.dirty || control.touched);
  }

  validateNameLength(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && control.value.length !== 5) {
      return { 'invalidNameLength': true };
    }
    return null;
  }

  getErrorMessage(controlName: string, errorKey: string): string {
    const control = this.form.get(controlName);
    switch (errorKey) {
      case 'required':
        return `El campo ${controlName} es requerido.`;
      case 'pattern':
        return `El campo ${controlName} no cumple con el formato requerido.`;
      case 'invalidNameLength':
        return `El campo ${controlName} debe tener exactamente 5 letras.`;
      case 'email':
        return `El campo ${controlName} no es un correo electrónico válido.`;
      default:
        return `Error desconocido en el campo ${controlName}.`;
    }
  }
}
