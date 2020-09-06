import { Component, OnInit } from '@angular/core';
import { OPERATOR } from 'src/app/garlic-common/operator.enum';
import { CURRENCY_UNIT } from 'src/app/garlic-common/currency-unit.enum';
import { MarketService } from '../../services/market.service';


@Component({
  selector: 'app-garlic-screener',
  templateUrl: './garlic-screener.component.html',
  styleUrls: ['./garlic-screener.component.scss']
})
export class GarlicScreenerComponent implements OnInit {

  marketCapC: boolean = false;
  divYieldC: boolean = false;
  payoutRatioC: boolean = false;
  peRatioC: boolean = false;
  revenueC: boolean = false;
  netIncomeC: boolean = false;
  profitMarginC: boolean = false;
  epsC: boolean = false;
  debtToEquityC: boolean = false;
  countryC: boolean = false;
  sectorC: boolean = false;
  industryC: boolean = false;



  marketCapOperator: string = OPERATOR.SUPERIOR;
  marketCap: number;
  marketCapUnit: string = CURRENCY_UNIT.MILLION;

  dividiendYield: number = 2;
  dividendYieldOp: string = OPERATOR.SUPERIOR;

  payoutRatio: number = 0;
  payoutRatioOp: string = OPERATOR.SUPERIOR;

  peRatio: number = 0;
  peRatioOp: string = OPERATOR.SUPERIOR;

  revenue: number;
  revenueOp: string = OPERATOR.SUPERIOR;
  revenueUnit: string = CURRENCY_UNIT.MILLION;

  netIncome: number;
  netIncomeOp: string = OPERATOR.SUPERIOR;
  netIncomeUnit: string = CURRENCY_UNIT.MILLION;

  profitMargin: number = 0;
  profitMarginOp: string = OPERATOR.SUPERIOR;

  eps: number = 0;
  epsOp: string = OPERATOR.SUPERIOR;

  debtToEquity: number = 0;
  debtToEquityOp: string = OPERATOR.SUPERIOR;

  country: string[] = [];
  sector: string[] = [];
  industry: string[] = [];


  constructor(private marketService: MarketService) { }

  ngOnInit(): void {

  }

  labelPercentage(value: number) {
    return value + '%';
  }

  screenTheMarket() {
    let criteria = {};
    if (this.marketCapC) {
      criteria['markteCapOp'] = this.marketCapOperator;
      criteria['markteCap'] = this.marketCap;
      criteria['markteCapUnit'] = this.marketCapUnit;
    }
    if (this.divYieldC) {
      criteria['dividendOp'] = this.dividendYieldOp;
      criteria['dividendYield'] = this.dividiendYield;
    }
    if (this.payoutRatioC) {
      criteria['payoutRatioOp'] = this.payoutRatioOp;
      criteria['payoutRatio'] = this.payoutRatio;
    }
    if (this.peRatioC) {
      criteria['peRatioOp'] = this.peRatioOp;
      criteria['peRatio'] = this.peRatio;
    }
    if (this.revenueC) {
      criteria['revenueOp'] = this.revenueOp;
      criteria['revenue'] = this.revenue;
      criteria['revenueUnit'] = this.revenueUnit;
    }

    if (this.netIncomeC) {
      criteria['netIncomeOp'] = this.netIncomeOp;
      criteria['netIncome'] = this.netIncome;
      criteria['netIncomeUnit'] = this.netIncomeUnit;
    }
    if (this.profitMarginC) {
      criteria['profitMarginOp'] = this.profitMarginOp;
      criteria['profitMargin'] = this.profitMargin;
    }
    if (this.epsC) {
      criteria['epsOp'] = this.epsOp;
      criteria['eps'] = this.eps;
    }
    if (this.debtToEquityC) {
      criteria['debtToEquityOp'] = this.debtToEquityOp;
      criteria['debtToEquity'] = this.debtToEquity;
    }
    if(this.countryC){
      criteria['country'] = this.country;
    }
    if(this.sectorC){
      criteria['sector'] = this.sector;
    }
    if(this.industryC){
      criteria['industry'] = this.industry;
    }
    console.log(criteria);
  }

  public get operator(): typeof OPERATOR {
    return OPERATOR;
  }

  public get unit(): typeof CURRENCY_UNIT {
    return CURRENCY_UNIT;
  }


}
