import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
    especialidad: '',
    turno: '',
    telefono: '',
  };
  
  constructor(private dataService: DataService, private router: Router) {}

  onSubmit() {
    this.dataService.addUser(this.formData).subscribe(
      (response) => {
        console.log('Usuario registrado:', response);
        alert('Registro exitoso!');
        this.router.navigate(['/nurse-login']);
      },
      (error) => {
        console.error('Error al registrar el usuario:', error);
        alert('Hubo un error en el registro.');
      }
    );
  }

}
