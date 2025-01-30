import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Enfermero } from '../models/enfermeros.model';

@Component({
  selector: 'app-nurse-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './nurse-register.component.html',
  styleUrls: ['./nurse-register.component.css'],
})
export class NurseRegisterComponent {
  formData = {
    username: '',
    password: '',
    name: '',
    surname: '',
    speciality: '',
    shift: '',
    phone: '',
  };
  successMessage: string = '';
  errorMessage: string = '';
  showErrors: boolean = false; // Nueva variable para mostrar errores

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit(form: any) {
    if (form.invalid) {
      this.showErrors = true; // Muestra los errores si el formulario es inválido
      return;
    }

    const userPayload: Partial<Enfermero> = {
      username: this.formData.username,
      password: this.formData.password,
      name: this.formData.name,
      surname: this.formData.surname,
      speciality: this.formData.speciality,
      shift: this.formData.shift,
      phone: this.formData.phone,
    };

    this.dataService.addUser(userPayload).subscribe(
      (response) => {
        if (response.status === 'success') {
          this.successMessage = response.message || 'Registro exitoso.';
          this.errorMessage = '';
          this.formData = {
            username: '',
            password: '',
            name: '',
            surname: '',
            speciality: '',
            shift: '',
            phone: '',
          };
          setTimeout(() => this.router.navigate(['/login']), 2000);
        } else {
          this.successMessage = '';
          this.errorMessage = response.message || 'Error en el registro.';
        }
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        this.successMessage = '';
        this.errorMessage = error.error?.message || 'Error al conectar con el servidor.';
      }
    );
  }
}
