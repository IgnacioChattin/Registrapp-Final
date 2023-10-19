import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { confirmacionPageRoutingModule } from './confirmacion-routing.module';

import { confirmacionPage } from './confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    confirmacionPageRoutingModule
  ],
  declarations: [confirmacionPage]
})
export class confirmacionPageModule {}
