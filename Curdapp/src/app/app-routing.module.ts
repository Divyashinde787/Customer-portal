import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'Users', component:UsersComponent},
{path:'userlist', component:UserlistComponent},
{path:'', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
