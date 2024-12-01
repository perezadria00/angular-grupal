import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-nurses',
  standalone: true, // Asegúrate de que este componente sea standalone
  imports: [CommonModule, FormsModule], // Incluye CommonModule aquí
  templateUrl: './search-nurses.component.html',
  styleUrls: ['./search-nurses.component.css']
})
export class SearchNursesComponent {
  nombre: string = '';
  resultados: Array<{ nombre: string; departamento: string }> = [];
  hasSearched: boolean = false;

  buscarEnfermeros() {
    this.hasSearched = true;

    const enfermeros = [
      { nombre: 'Laura García', departamento: 'Urgencias' },
      { nombre: 'Carlos Martínez', departamento: 'Pediatría' },
      { nombre: 'Ana López', departamento: 'UCI' }
    ];

    this.resultados = enfermeros.filter((enfermero) =>
      enfermero.nombre.toLowerCase().includes(this.nombre.toLowerCase())
    );
  }
}


