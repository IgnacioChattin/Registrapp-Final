import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { registrarPageRoutingModule } from './registrar-routing.module';

import { registrarPage } from './registrar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    registrarPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [registrarPage]
})
export class registrarPageModule {}
