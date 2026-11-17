import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  usuario = {
    nombre: 'Administrador General',
    correo: 'admin@valleacademico.com',
    rol: 'Administrador',
    institucion: 'Valle Académico'
  };
  
}
