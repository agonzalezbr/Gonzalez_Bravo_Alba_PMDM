import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { GoiburukoaComponent } from './goiburukoa/goiburukoa.component';

@NgModule({
  declarations: [GoiburukoaComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    GoiburukoaComponent,

  ]
})
export class KonponenteakModule { }
