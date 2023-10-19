import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { registrarPage } from './registrar.page';

const routes: Routes = [
  {
    path: '',
    component: registrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class registrarPageRoutingModule {}
