import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch : `full`},
  {path:'profile',component:ProfileComponent},
  {path: 'aboutus',component:AboutUSComponent},
  {path: 'gallery',component:GalleryComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {path: 'update-flight/:id', component:UpdateFlightComponent},
  {path:'create-flight',component:CreateFlightComponent},
  {path: 'list', component:ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
