import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-enfermeros',
  templateUrl: './listado-enfermeros.component.html',
  styleUrls: ['./listado-enfermeros.component.css'],
  standalone: true,
  imports: [CommonModule] // Importa CommonModule aquí
})
export class ListadoEnfermerosComponent {
  enfermeros = [
    { nombre: 'Ana Martínez', especialidad: 'Pediatría', turno: 'Mañana', telefono: '555-123-456' },
    { nombre: 'Carlos López', especialidad: 'Urgencias', turno: 'Tarde', telefono: '555-234-567' },
    { nombre: 'Lucía Fernández', especialidad: 'Geriatría', turno: 'Noche', telefono: '555-345-678' },
    { nombre: 'Juan Pérez', especialidad: 'Cirugía', turno: 'Mañana', telefono: '555-456-789' },
    { nombre: 'María Torres', especialidad: 'Cardiología', turno: 'Tarde', telefono: '555-567-890' },
  ];
}
