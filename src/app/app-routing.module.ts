import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviescompComponent } from './moviescomp/moviescomp.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'movies',component:MoviescompComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
