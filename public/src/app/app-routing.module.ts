import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComponent } from './all/all.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './info/info.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'pets', component: AllComponent },
  { path : 'pets/new' , component : CreateComponent },
  { path : 'pets/edit/:id' , component : UpdateComponent},
  { path : "" , pathMatch: 'full', redirectTo: '/pets'},
  {path : "pets/:id" , component : InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
