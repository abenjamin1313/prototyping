import { NgModule } from "@angular/core";
import { MatCommonModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatCommonModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  exports: [
    MatCheckboxModule,
    MatCommonModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [

  ]
})
export class MaterialModule {}
