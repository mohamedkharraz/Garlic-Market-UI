import { Currency } from './currency.model';
import { Sector } from './sector.model';
import { Industry } from './industry.model';

export class Corporate {
  ticker: string;
  name: string;
  country: string;
  logo: string;
  currency: Currency;
  sector: Sector;
  industry: Industry;
}
