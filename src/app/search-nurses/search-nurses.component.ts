import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search-nurses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-nurses.component.html',
  styleUrls: ['./search-nurses.component.css']
})
export class SearchNursesComponent {
  nombre: string = ''; // Campo de búsqueda
  resultados: Array<{ nombre: string; departamento: string }> = []; // Resultados de la búsqueda
  hasSearched: boolean = false; // Indicador de búsqueda realizada
  errorMessage: string = ''; // Mensaje de error

  constructor(private dataService: DataService) {}

  buscarEnfermeros() {
    this.hasSearched = true;

    this.dataService.getData().subscribe(
      (data: any[]) => {
        // Filtrar enfermeros según el nombre ingresado
        this.resultados = data
          .map((enfermero) => ({
            nombre: enfermero.nombre,
            departamento: enfermero.especialidad, // Usamos "especialidad" como departamento
          }))
          .filter((enfermero) =>
            enfermero.nombre.toLowerCase().includes(this.nombre.toLowerCase())
          );

        // Si no hay resultados, se muestra un mensaje
        if (this.resultados.length === 0) {
          this.errorMessage = 'No se encontraron resultados.';
        } else {
          this.errorMessage = ''; // Limpiar mensaje de error
        }
      },
      (error) => {
        console.error('Error al buscar enfermeros:', error);
        this.errorMessage = 'Ocurrió un error al realizar la búsqueda.';
      }
    );
  }
}



