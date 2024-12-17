import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-nurse-profile',
  standalone: true,
  templateUrl: './nurse-profile.component.html',
  styleUrls: ['./nurse-profile.component.css'],
})
export class NurseProfileComponent implements OnInit {
  name: string = '';
  speciality: string = '';
  shift: string = '';
  phone_number: string = '';
  username: string = '';
  email: string = '';
  imgPerfil: string = ''; // Nueva variable para la imagen

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchProfileData();
  }

  fetchProfileData() {
    this.dataService.getProfile().subscribe(
      (profile) => {
        console.log('Perfil recibido:', profile); // Imprime el perfil completo en la consola
        if (profile) {
          this.name = profile.nombre;
          this.speciality = profile.especialidad;
          this.shift = profile.turno;
          this.phone_number = profile.telefono;
          this.username = profile.username;
          this.email = profile.email;
          this.imgPerfil = profile['img-perfil'] || 'assets/images/prueba.jpg'; // Imagen por defecto
        } else {
          console.error('No hay un usuario autenticado.');
        }
      },
      (error) => {
        console.error('Error al obtener los datos del perfil:', error);
      }
    );
  }
  
}

