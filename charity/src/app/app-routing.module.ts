import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharitiesComponent } from './charities/charities.component';
import { HomeComponent } from './home/home.component';
import { HouseholdsComponent } from './households/households.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},//if spelling error, makes user go to home page
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "charities", component: CharitiesComponent},
  {path: "households",  component: HouseholdsComponent},
  {path: "contactUs", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
