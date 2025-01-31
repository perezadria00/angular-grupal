import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nurse-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nurse-register.component.html',
  styleUrls: ['./nurse-register.component.css'],
})
export class NurseRegisterComponent {
  formData = {
    username: '',
    email: '',
    password: '',
    name: '',
    surname: '',
    speciality: '',
    shift: '',
    phone: '',
  };

  successMessage: string = '';
  errorMessage: string = '';
  hasSubmitted: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.hasSubmitted = true;

    // Validar formato de teléfono
    if (!this.formData.phone.match(/^\d{3}-\d{3}-\d{3}$/)) {
      this.errorMessage = 'Formato de teléfono inválido. Ej.: 123-456-789.';
      this.successMessage = '';
      return;
    }

    // Llamar al servicio para registrar el usuario
    this.dataService.addUser(this.formData).subscribe(
      (response) => {
        if (response.status === 'success') {
          this.successMessage = response.message || 'Registro exitoso.';
          this.errorMessage = '';
          this.formData = {
            username: '',
            email: '',
            password: '',
            name: '',
            surname: '',
            speciality: '',
            shift: '',
            phone: '',
          };
          setTimeout(() => this.router.navigate(['/nurse-login']), 2000);
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
