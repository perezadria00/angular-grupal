import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nurse-profile',
  standalone: true,
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css'],
  imports: [CommonModule, FormsModule],
})
export class NurseProfileComponent implements OnInit {
  id: number | null = null; // Almacena el ID del usuario
  name: string = '';
  surname: string = '';
  password: string = '';
  speciality: string = '';
  shift: string = '';
  phone: string = '';
  username: string = '';
  email: string = '';
  imgPerfil: string = ''; // Imagen predeterminada

  editableProfile = {
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    speciality: '',
    shift: '',
    phone: '',
  };

  successMessage: string = ''; // Mensaje de éxito
  errorMessage: string = ''; // Mensaje de error

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.fetchProfileData();
  }

  fetchProfileData() {
    this.dataService.getProfile().subscribe(
      (profile) => {
        if (profile) {
          console.log('Perfil recibido:', profile);
          this.id = profile.id; // Almacena el ID del usuario
          this.name = profile.name;
          this.surname = profile.surname;
          this.email = profile.email;
          this.username = profile.username;
          this.password = profile.password;
          this.speciality = profile.speciality;
          this.shift = profile.shift;
          this.phone = profile.phone;
          this.imgPerfil = 'assets/images/prueba.jpg'; // Imagen predeterminada

          // Inicializar el formulario de edición con los datos actuales
          this.editableProfile = {
            name: profile.name,
            surname: profile.surname,
            email: profile.email,
            username: profile.username,
            password: profile.password,
            speciality: profile.speciality,
            shift: profile.shift,
            phone: profile.phone,
          };
        } else {
          console.error('No se encontró el perfil del usuario.');
        }
      },
      (error) => {
        console.error('Error al obtener el perfil del usuario:', error);
      }
    );
  }

  updateProfile() {
    if (this.id === null) {
      alert('No se puede actualizar el perfil. Falta el ID del usuario.');
      return;
    }
  
    this.dataService.updateProfile(this.id, this.editableProfile).subscribe(
      (response) => {
        console.log('Perfil actualizado correctamente', response);
  
        // Actualizar los datos mostrados en el contenedor superior
        this.name = this.editableProfile.name;
        this.surname = this.editableProfile.surname;
        this.email = this.editableProfile.email;
        this.username = this.editableProfile.username;
        this.password = this.editableProfile.password;
        this.speciality = this.editableProfile.speciality;
        this.shift = this.editableProfile.shift;
        this.phone = this.editableProfile.phone;
  
        this.successMessage = 'Perfil actualizado correctamente.';
        setTimeout(() => (this.successMessage = ''), 3000); // Ocultar el mensaje después de 3 segundos
      },
      (error) => {
        console.error('Error al actualizar el perfil:', error);
        this.errorMessage = 'Error al actualizar el perfil.';
        setTimeout(() => (this.errorMessage = ''), 3000); // Ocultar el mensaje después de 3 segundos
      }
    );
  }
  
  deleteAccount() {
    if (this.id === null) {
      alert('No se puede eliminar la cuenta. Falta el ID del usuario.');
      return;
    }

    // Mostrar mensaje de confirmación antes de eliminar
    const confirmDelete = confirm(
      '¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.'
    );

    if (!confirmDelete) {
      return; // Salir si el usuario cancela la eliminación
    }

    this.dataService.deleteUser(this.id).subscribe(
      (response) => {
        console.log('Cuenta eliminada correctamente:', response);
        alert('Cuenta eliminada correctamente.');
        this.router.navigate(['/']); // Redirige a la página principal después de eliminar
      },
      (error) => {
        console.error('Error al eliminar la cuenta:', error);
        alert('Error al eliminar la cuenta.');
      }
    );
  }
}
