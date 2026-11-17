import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'estudiantes',
        component: EstudiantesComponent
      },
      {
        path: 'cursos',
        component: CursosComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];