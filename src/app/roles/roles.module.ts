import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ListRolesComponent } from './list-roles/list-roles.component';

@NgModule({
  declarations: [
    ListRolesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListRolesComponent
  ]
})
export class RolesModule { }
