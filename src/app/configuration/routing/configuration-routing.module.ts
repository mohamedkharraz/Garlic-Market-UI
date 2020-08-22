import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TickerUploadComponent } from '../components/ticker-upload/ticker-upload.component';
import { CorporateComponent } from '../components/corporate/corporate.component';

const routes: Routes = [
  { path: 'ticker-upload', component: TickerUploadComponent },
  { path: 'corporate', component: CorporateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ConfigurationRoutingModule {}
