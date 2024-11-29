import { Component } from '@angular/core';

@Component({
  selector: 'app-nurse-login',
  templateUrl: './nurse-login.component.html',
  styleUrls: ['./nurse-login.component.css']
})
export class NurseLoginComponent {

  handleLogin(event: Event) {
    event.preventDefault();
  
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
  
    const messageDiv = document.getElementById('message');
    
    if (username === 'admin' && password === '1234') {
      messageDiv!.innerHTML = 'Login successful!';
      messageDiv!.className = 'success'; // Añadir la clase de éxito
    } else {
      messageDiv!.innerHTML = 'Invalid username or password.';
      messageDiv!.className = ''; // Limpiar las clases anteriores
    }
  }
}
