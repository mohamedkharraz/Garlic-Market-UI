import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationRoutingModule } from './routing/configuration-routing.module';

import { TickerUploadComponent } from './components/ticker-upload/ticker-upload.component';
import { UploadService } from './services/upload.service';
import { CorporateComponent } from './components/corporate/corporate.component';

@NgModule({
  declarations: [TickerUploadComponent, CorporateComponent],
  imports: [CommonModule, ConfigurationRoutingModule, HttpClientModule],
  providers: [UploadService],
})
export class ConfigurationModule {}
