import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listado-enfermeros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-enfermeros.component.html',
  styleUrls: ['./listado-enfermeros.component.css']
})
export class ListadoEnfermerosComponent implements OnInit {
  enfermeros: Array<{
    id: number;
    username: string;
    name: string;
    surname: string;
    email: string;
    speciality: string;
    shift: string;
    phone: string;
  }> = [];
  errorMessage: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cargarEnfermeros();
  }

  cargarEnfermeros(): void {
    this.dataService.getData().subscribe(
      (data) => {
        if (data.length > 0) {
          this.enfermeros = data;
        } else {
          this.errorMessage = 'No se encontraron enfermeros registrados.';
        }
      },
      (error) => {
        console.error('Error al obtener la lista de enfermeros:', error);
        this.errorMessage = 'Error al conectar con el servidor.';
      }
    );
  }
}
