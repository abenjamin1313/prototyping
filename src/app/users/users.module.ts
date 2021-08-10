import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ListUsersComponent } from './list-users/list-users.component';



@NgModule({
  declarations: [
    ListUsersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListUsersComponent
  ]
})
export class UsersModule { }
