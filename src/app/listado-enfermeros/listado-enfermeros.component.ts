import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Enfermero } from '../models/enfermeros.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listado-enfermeros',
  templateUrl: './listado-enfermeros.component.html',
  styleUrls: ['./listado-enfermeros.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule ] // Importa CommonModule aquí
})
export class ListadoEnfermerosComponent implements OnInit {
  enfermeros: Partial<Enfermero>[] = []; // Asegúrate de que el array sea un array vacío al inicio.

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Asegúrate de que estás asignando todos los datos sin filtrar.
    this.dataService.getData().subscribe(
      (data: Partial<Enfermero>[]) => {
        this.enfermeros = data; // Asignar todos los enfermeros al array.
      },
      (error) => {
        console.error('Error al cargar los datos', error);
      }
    );
  }
}
