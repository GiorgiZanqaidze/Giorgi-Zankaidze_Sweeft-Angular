import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersListComponent} from "./pages/users-list/users-list.component";
import {UserDetailsComponent} from "./pages/user-details/user-details.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full'
  },
  {
    path: 'users-list',
    component: UsersListComponent,
  },
  {
    path: 'users-list/user/:id',
    component: UserDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'users-list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
