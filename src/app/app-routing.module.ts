import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConsigliatiComponent } from './consigliati/consigliati.component';
import { ContattiComponent } from './contatti/contatti.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch:"full"},
  { path: "home", component: HomeComponent},
  { path: "consigliati", component: ConsigliatiComponent},
  { path: "about", component: AboutComponent},
  { path: "contatti", component: ContattiComponent},
  { path: "dettagli/:id", component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
