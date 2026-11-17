import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos = [
    { id: 1, nombre: 'Programación Web', duracion: '16 semanas', estado: 'Activo' },
    { id: 2, nombre: 'Base de Datos', duracion: '12 semanas', estado: 'Activo' },
    { id: 3, nombre: 'Desarrollo Móvil', duracion: '16 semanas', estado: 'Activo' },
    { id: 4, nombre: 'Análisis de Sistemas', duracion: '14 semanas', estado: 'Activo' }
  ];

}
