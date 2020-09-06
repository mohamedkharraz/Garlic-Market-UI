

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LookUpComponent } from '../components/look-up/look-up.component';
import { GarlicScreenerComponent } from '../components/garlic-screener/garlic-screener.component';


const routes: Routes = [
  { path: 'lookup',component: LookUpComponent},
  { path: 'garlic-screener', component: GarlicScreenerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MarketHelperRoutingModule{

}
