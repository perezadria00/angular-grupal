import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  styleUrls: ['./nurse-login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class NurseLoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';

  constructor(private dataService: DataService) {}

  handleLogin(event: Event) {
    event.preventDefault();

    // Llamamos al servicio para validar el usuario y contraseña
    this.dataService.validateUser(this.username, this.password).subscribe(
      (isValid: boolean) => {
        if (isValid) {
          this.message = 'Login successful!';
          this.messageClass = 'success';
        } else {
          this.message = 'Invalid username or password.';
          this.messageClass = 'error';
        }
      },
      error => {
        console.error('Error al validar el usuario:', error);
        this.message = 'Error al intentar iniciar sesión.';
        this.messageClass = 'error';
      }
    );
  }
}
