import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GarlicToggleComponent } from "./components/garlic-toggle/garlic-toggle.component";
import { GarlicPaginationComponent } from './components/garlic-pagination/garlic-pagination.component';

@NgModule({
  declarations: [GarlicToggleComponent, GarlicPaginationComponent],
  imports: [
    CommonModule,
    FormsModule,

    BrowserAnimationsModule

  ],
  providers: [],
  exports: [GarlicToggleComponent, GarlicPaginationComponent]

})
export class GarlicCommonModule { }
