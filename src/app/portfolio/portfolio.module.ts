import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioRoutingModule } from "./routing/portfolio-routing.module";
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,

    MatSliderModule
  ]
})
export class PortfolioModule { }
