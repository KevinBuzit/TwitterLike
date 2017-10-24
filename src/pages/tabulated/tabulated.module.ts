import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabulatedPage } from './tabulated';

@NgModule({
  declarations: [
    TabulatedPage,
  ],
  imports: [
    IonicPageModule.forChild(TabulatedPage),
  ],
})
export class TabulatedPageModule {}
