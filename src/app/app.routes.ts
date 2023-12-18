import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllHomesComponent } from './real-estate-homes/all-homes/all-homes.component';
import { HomeDetailsComponent } from './real-estate-homes/home-details/home-details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "all-homes", component: AllHomesComponent},
    {path: "home-details/:homeId", component: HomeDetailsComponent}
];
