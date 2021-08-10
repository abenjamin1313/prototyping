import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {
    path: '', component: ListUsersComponent
  },
  {
    path: 'roles', component: ListRolesComponent
  },
  {
    path: 'users', component: ListUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
