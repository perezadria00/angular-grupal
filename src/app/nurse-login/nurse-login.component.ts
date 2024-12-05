import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  styleUrls: ['./nurse-login.component.css'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class NurseLoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  messageClass: string = '';  // Asegúrate de que esta variable esté bien definida

  handleLogin(event: Event) {
    event.preventDefault();
  
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Login successful!';
      this.messageClass = 'success'; // Cambia a 'success'
    } else {
      this.message = 'Invalid username or password.';
      this.messageClass = 'error'; // Cambia a 'error'
    }
  
    console.log(this.messageClass); // Verifica si se está asignando correctamente
  }
  
}

