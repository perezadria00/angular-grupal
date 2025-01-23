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
  enfermeros: Enfermero[] = []; 
  errorMessage: string = ''; 
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchEnfermeros();
  }

  fetchEnfermeros(): void {
    this.dataService.getData().subscribe(
      (data: Enfermero[]) => {
        this.enfermeros = data; // Asignar directamente los datos si coinciden con el modelo
      },
      (error) => {
        console.error('Error al obtener los datos de enfermeros:', error);
        this.errorMessage = 'No se pudo cargar la lista de enfermeros.';
      }
    );
  }
}
