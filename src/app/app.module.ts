import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';
import { ErrorHandlerService }  from './services/errorhandler.service';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly router: Router) {
    router.events
      .subscribe(console.log)
  }
}
