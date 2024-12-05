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
  messageClass: string = '';  

  handleLogin(event: Event) {
    event.preventDefault();
  
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Login successful!';
      this.messageClass = 'success'; 
    } else {
      this.message = 'Invalid username or password.';
      this.messageClass = 'error'; 
    }
  
    console.log(this.messageClass); 
  }
  
}

