import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./paginas/recuperar/recuperar.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./paginas/registrar/registrar.module').then( m => m.registrarPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./paginas/verificar/verificar.module').then( m => m.verificarPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./paginas/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./paginas/confirmacion/confirmacion.module').then( m => m.confirmacionPageModule)
  },
  { path: '**', component: NotFoundComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
