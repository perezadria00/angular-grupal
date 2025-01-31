import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nurse-profile',
  standalone: true,
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css'],
  imports: [CommonModule, FormsModule]
})
export class NurseProfileComponent implements OnInit {
  name: string = '';
  surname: string = '';
  password: string = '';
  speciality: string = '';
  shift: string = '';
  phone: string = '';
  username: string = '';
  email: string = '';
  imgPerfil: string = ''; // Nueva variable para la imagen

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

  userImages: { [key: string]: string } = {
    ajimenez: 'assets/images/foto1.png',
    mrodriguez: 'assets/images/foto3.png',
    lgarcia: 'assets/images/foto4.png',
    jperez: 'assets/images/foto2.png',
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchProfileData();
  }

  fetchProfileData() {
    this.dataService.getProfile().subscribe(
      (profile) => {
        console.log('Perfil recibido:', profile); // Imprime el perfil completo en la consola
        if (profile) {
          this.name = profile.name;
          this.surname = profile.surname;
          this.email = profile.email;
          this.username = profile.username;
          this.password = profile.password;
          this.speciality = profile.speciality;
          this.shift = profile.shift;
          this.phone = profile.phone;
          this.imgPerfil = this.userImages[profile.username] || 'assets/images/prueba.jpg'; // Imagen por defecto

          // Inicializar el formulario de edición con los datos actuales
          this.editableProfile = {
            name: profile.name,
            surname: profile.surname,
            email: profile.email,
            username: profile.username,
            password: profile.password,
            speciality: profile.speciality,
            shift: profile.shift,
            phone: profile.phone
          };
        } else {
          console.error('No hay un usuario autenticado.');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del perfil:', error);
      }
    );
  }

  updateProfile() {
    this.dataService.updateProfile(this.editableProfile).subscribe(
      (response) => {
        console.log('Perfil actualizado con éxito', response);
        alert('Perfil actualizado correctamente');

        // Actualizar los datos mostrados en la interfaz
        this.fetchProfileData();
      },
      (error) => {
        console.error('Error al actualizar el perfil:', error);
        alert('Error al actualizar el perfil');
      }
    );
  }
  
}

