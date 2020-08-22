import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORT MY MODULES
import { ConfigurationModule } from './configuration/configuration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // ANGULAR MODULES
    BrowserModule,
    AppRoutingModule,

    //My Modules
    ConfigurationModule
    //3RD PARTY MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
