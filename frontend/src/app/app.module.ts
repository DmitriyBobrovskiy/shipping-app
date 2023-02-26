import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParcelsModule } from './parcels/parcels.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ParcelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
