import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketHelperRoutingModule } from './routing/market-helper-routing.module';
import { LookUpComponent } from './components/look-up/look-up.component';
import { FormsModule } from '@angular/forms';
import { MarketService } from "./services/market.service";
import { GarlicScreenerComponent } from './components/garlic-screener/garlic-screener.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { GarlicCommonModule } from '../garlic-common/garlic-common.module';



@NgModule({
  declarations: [LookUpComponent, GarlicScreenerComponent],
  imports: [
    CommonModule,
    MarketHelperRoutingModule,
    FormsModule,

    BrowserAnimationsModule,

    MatSliderModule,
    MatSlideToggleModule,

    GarlicCommonModule

  ],
  providers: [MarketService],

})
export class MarketHelperModule { }
