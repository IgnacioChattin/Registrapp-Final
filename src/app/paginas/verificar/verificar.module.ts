import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { verificarPageRoutingModule } from './verificar-routing.module';

import { verificarPage } from './verificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    verificarPageRoutingModule
  ],
  declarations: [verificarPage]
})
export class verificarPageModule {}
