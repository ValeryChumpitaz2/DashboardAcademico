import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  imports: [],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css'
})
export class EstudiantesComponent {
estudiantes = [
    { id: 1, nombre: 'Andrea Torres', carrera: 'Análisis de Sistemas' },
    { id: 2, nombre: 'Carlos Mendoza', carrera: 'Desarrollo de Software' },
    { id: 3, nombre: 'Lucía Ramírez', carrera: 'Análisis de Sistemas' },
    { id: 4, nombre: 'José Castillo', carrera: 'Administración' }
  ];

}
