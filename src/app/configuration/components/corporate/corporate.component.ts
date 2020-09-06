import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CorporateService } from '../../services/corporate.service';
import { CurrencyService } from '../../services/currency.service';
import { forkJoin, fromEvent } from 'rxjs';
import { SectorService } from '../../services/sector.service';
import { IndustryService } from '../../services/industry.service';
import * as _ from 'lodash';
import { handleError } from 'src/app/garlic-common/Utils';
import { Corporate } from 'src/app/garlic-common/models/corporate.model';
import { Industry } from 'src/app/garlic-common/models/industry.model';
import { Sector } from 'src/app/garlic-common/models/sector.model';
import { Currency } from 'src/app/garlic-common/models/currency.model';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css'],
})
export class CorporateComponent implements OnInit {
  @ViewChild('addCorporateCloseBtn') AddClose: ElementRef;

  corporates: Corporate[];
  items: Corporate[];
  corporatesOldValues: Corporate[];
  currencies: Currency[];
  sectors: Sector[];
  industries: Industry[];
  filter: string;
  initiating: boolean = true;

  success: string;
  error: string;

  newTicker: string;
  loading: boolean = false;

  corporatesEditMode: boolean[];

  paginationPerPage: number = 10;
  paginationFrom: number = 0;
  paginationTo: number = 10;



  constructor(
    private service: CorporateService,
    private currencyService: CurrencyService,
    private sectorService: SectorService,
    private industryService: IndustryService
  ) { }

  ngOnInit(): void {
    this.service
      .getCorporates()
      .subscribe((corporates: Corporate[]) => {
        this.corporates = corporates;
        this.corporatesEditMode = new Array(this.corporates.length);
        this.corporatesOldValues = new Array<Corporate>(this.corporates.length);
        this.corporatesEditMode.fill(false);
      }, err => this.initiating = false, () => this.initiating = false);
  }


  f(corp: Corporate, token: string) {
    return token ?
      (corp.ticker && corp.ticker.toLocaleLowerCase().includes(token.toLocaleLowerCase())) ||
      (corp.name && corp.name.toLocaleLowerCase().includes(token.toLocaleLowerCase())) ||
      (corp.country && corp.country.toLocaleLowerCase().includes(token.toLocaleLowerCase())) ||
      (corp.currency && corp.currency.isoCode && corp.currency.isoCode.toLocaleLowerCase().includes(token.toLocaleLowerCase())) ||
      (corp.industry && corp.industry.label && corp.industry.label.toLocaleLowerCase().includes(token.toLocaleLowerCase())) ||
      (corp.sector && corp.sector.label && corp.sector.label.toLocaleLowerCase().includes(token.toLocaleLowerCase()))
      : true;
  }


  actualise(event: Corporate[]) {
    console.log(event);
    if (event)
      this.items = event;
  }


  edit(corporate: Corporate, index: number) {
    this.resetAlerts();
    forkJoin([
      this.currencyService.getCurrencies(),
      this.sectorService.getSectors(),
      this.industryService.getIndustries()
    ]).subscribe(resp => {
      if (resp[0]) {
        this.currencies = resp[0];
      };
      if (resp[1]) {
        this.sectors = resp[1];
      }
      if (resp[2]) {
        this.industries = resp[2];
      }
    });
    this.corporatesEditMode[index] = true;
    this.corporatesOldValues[index] = { ... this.corporates[index] };
  }

  resetAlerts() {
    this.error = this.success = null;
  }

  cancel(index: number) {
    this.corporatesEditMode[index] = false;
    this.corporates[index] = this.corporatesOldValues[index];
  }

  currencyChange(event: any, index: number) {
    this.corporates[index].currency = this.currencies.filter(c => c.isoCode === event.target.value)[0];
  }

  sectorChange(event: any, index: number) {
    this.corporates[index].sector = this.sectors.filter(s => s.label === event.target.value)[0];
  }

  industryChange(event: any, index: number) {
    this.corporates[index].industry = this.industries.filter(ind => ind.label === event.target.value)[0];
  }

  confirmEdit(index: number) {
    if (!_.isEqual(this.corporatesOldValues[index], this.corporates[index]))
      this.service.updateCorporate(this.corporates[index].ticker, this.corporates[index])
        .subscribe(
          (c: Corporate) => {
            this.corporatesOldValues[index] = null;
            this.corporates[index] = c;
            this.success = `Corporate ${this.corporates[index].ticker} updated successfully`
          },
          (error) => {
            this.cancel(index);
            this.error = handleError(error);
          },
          () => { this.corporatesEditMode[index] = false; }
        )
  }

  closeAddModal() {
    this.AddClose.nativeElement.click();
  }

  addCorporate() {
    const symbol = this.newTicker;
    this.newTicker = null;

    if (this.corporates.filter(c => c.ticker === symbol).length > 0) {
      this.error = `Corporate ${symbol} already exists`;
      this.closeAddModal();
      return;
    }

    this.loading = true;
    this.service.addNewCorporate(symbol)
      .subscribe(
        (c: Corporate) => {
          this.corporates.unshift(c);
          this.success = `Corporate ${symbol} Successfully Added`
        },
        err => { this.error = handleError(err); this.loading = false; },
        () => { this.newTicker = null; this.loading = false; }
      )
    this.closeAddModal();
  }


}
