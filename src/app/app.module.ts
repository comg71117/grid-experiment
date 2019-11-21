import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridTestOneModule } from './grid-test-one/grid-test-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridTestOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
