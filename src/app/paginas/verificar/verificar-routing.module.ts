import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { verificarPage } from './verificar.page';

const routes: Routes = [
  {
    path: '',
    component: verificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class verificarPageRoutingModule {}
