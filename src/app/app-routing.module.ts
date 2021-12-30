import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'ver-mais',
    loadChildren: () =>
      import('./pages/ver-mais/ver-mais.module').then((m) => m.VerMaisModule),
  },

  {
    path: 'editar-texto',
    loadChildren: () =>
      import('./pages/editar-texto/editar-texto.module').then(
        (m) => m.EditarTextoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
