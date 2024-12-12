import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Enfermero } from '../models/enfermeros.model';

@Component({
  selector: 'app-listado-enfermeros',
  templateUrl: './listado-enfermeros.component.html',
  styleUrls: ['./listado-enfermeros.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class ListadoEnfermerosComponent implements OnInit {
  enfermeros: Partial<Enfermero>[] = []; // Arreglo dinámico para almacenar los datos de enfermeros
  errorMessage: string = ''; // Para manejar errores

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchEnfermeros();
  }

  fetchEnfermeros() {
    this.dataService.getData().subscribe(
      (data: Partial<Enfermero>[]) => {
        this.enfermeros = data.map((enfermero) => ({
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

