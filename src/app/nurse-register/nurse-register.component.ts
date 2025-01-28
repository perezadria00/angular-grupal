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
    nombre: '',
    apellido: '',
    especialidad: '',
    turno: '',
    telefono: '',
  };
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    if (!this.formData.telefono.match(/^\d{3}-\d{3}-\d{3}$/)) {
      this.errorMessage = 'Formato de teléfono inválido. Ej.: XXX-XXX-XXX.';
      this.successMessage = '';
      return;
    }

    const userPayload: Partial<Enfermero> = {
      username: this.formData.username,
      password: this.formData.password,
      name: this.formData.nombre,
      surname: this.formData.apellido,
      speciality: this.formData.especialidad,
      shift: this.formData.turno,
      phone: this.formData.telefono,
    };

    this.dataService.addUser(userPayload).subscribe(
      (response) => {
        if (response.status === 'success') {
          this.successMessage = response.message || 'Registro exitoso.';
          this.errorMessage = '';
          this.formData = {
            username: '',
            password: '',
            nombre: '',
            apellido: '',
            especialidad: '',
            turno: '',
            telefono: '',
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
        if (error.error?.message) {
          this.errorMessage = error.error.message; // Mensaje del backend
        } else {
          this.errorMessage = 'Error al conectar con el servidor.';
        }
      }
    );
    
  }
}
