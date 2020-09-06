import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationRoutingModule } from './routing/configuration-routing.module';

import { TickerUploadComponent } from './components/ticker-upload/ticker-upload.component';
import { UploadService } from './services/upload.service';
import { SectorService } from './services/sector.service';
import { IndustryService } from './services/industry.service';
import { CorporateService } from './services/corporate.service';
import { CorporateComponent } from './components/corporate/corporate.component';
import { FormsModule } from '@angular/forms';
import { GarlicCommonModule } from '../garlic-common/garlic-common.module';

@NgModule({
  declarations: [TickerUploadComponent, CorporateComponent],
  imports: [CommonModule, ConfigurationRoutingModule, HttpClientModule, FormsModule, GarlicCommonModule ],
  providers: [UploadService, CorporateService, SectorService, IndustryService],
})
export class ConfigurationModule { }
