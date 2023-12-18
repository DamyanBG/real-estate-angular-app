import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllHomesComponent } from './all-homes/all-homes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllHomesComponent,
    HttpClientModule
  ]
})
export class RealEstateHomesModule { }
