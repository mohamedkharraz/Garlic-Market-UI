import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from "@angular/material/slider";

//IMPORT MY MODULES
import { ConfigurationModule } from './configuration/configuration.module';
import { MarketHelperModule } from './market-helper/market-helper.module';
import { GarlicCommonModule } from "./garlic-common/garlic-common.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // ANGULAR MODULES
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    MatSliderModule,

    //My Modules
    ConfigurationModule,
    MarketHelperModule,
    GarlicCommonModule,

    //3RD PARTY MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
