import { LoginComponent } from './../login/login.component';
import { CriarTextoComponent } from '../../components/criar-Texto/criar-texto.component';
import { TextosComponent } from './textos/textos.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: TextosComponent,
      },
      {
        path: '',
        component: CriarTextoComponent,
      },
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
