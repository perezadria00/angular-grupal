import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-listado-enfermeros',
  templateUrl: './listado-enfermeros.component.html',
  styleUrls: ['./listado-enfermeros.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ListadoEnfermerosComponent implements OnInit {
  enfermeros: any[] = []; // Arreglo dinámico para almacenar los datos de enfermeros
  errorMessage: string = ''; // Para manejar errores

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.fetchEnfermeros();
  }

  fetchEnfermeros() {
    this.dataService.getData().subscribe(
      (data) => {
        this.enfermeros = data.map((enfermero: any) => ({
          nombre: enfermero.nombre,
          especialidad: enfermero.especialidad,
          turno: enfermero.turno,
          telefono: enfermero.telefono,
        }));
      },
      (error) => {
        console.error('Error al obtener los datos de enfermeros:', error);
        this.errorMessage = 'No se pudo cargar la lista de enfermeros.';
      }
    );
  }
}
