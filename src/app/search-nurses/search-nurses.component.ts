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
  resultados: Array<{ nombre: string; usuario: string; departamento: string }> = []; // Resultados de la búsqueda
  hasSearched: boolean = false; // Indicador de búsqueda realizada
  errorMessage: string = ''; // Mensaje de error

  constructor(private dataService: DataService) {}

  buscarEnfermeros() {
    this.hasSearched = true;

    this.dataService.getData().subscribe(
      (data: any[]) => {
        const normalizedInput = this.normalizeString(this.nombre);

        // Filtrar enfermeros por nombre completo o usuario
        this.resultados = data
          .map((enfermero) => ({
            nombre: `${enfermero.name} ${enfermero.surname}`,
            usuario: enfermero.username,
            departamento: enfermero.speciality,
          }))
          .filter(
            (enfermero) =>
              this.normalizeString(enfermero.nombre).includes(normalizedInput) ||
              this.normalizeString(enfermero.usuario).includes(normalizedInput)
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

  // Normalizar cadenas eliminando tildes y convirtiendo a minúsculas
  private normalizeString(str: string): string {
    return str
      .normalize('NFD') // Descompone caracteres con tilde
      .replace(/[\u0300-\u036f]/g, '') // Elimina marcas diacríticas
      .toLowerCase(); // Convierte a minúsculas
  }
}
