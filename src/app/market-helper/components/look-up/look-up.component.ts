import { Component, OnInit } from '@angular/core';
import { CorporateProfile } from "src/app/garlic-common/models/corporate-profile.model";
import { MarketService } from '../../services/market.service';
import { handleError } from 'src/app/garlic-common/Utils';

@Component({
  selector: 'app-look-up',
  templateUrl: './look-up.component.html',
  styleUrls: ['./look-up.component.scss']
})
export class LookUpComponent implements OnInit {

  ticker: string;
  profile: CorporateProfile;

  error: string;
  loading: boolean;

  constructor(private service: MarketService) { }

  ngOnInit(): void {
  }

  onKeyEnter() {
    this.error = null;
    this.profile = null;
    this.loading = true;
    this.service.lookUp(this.ticker)
      .subscribe(
        (profile: CorporateProfile) => { this.profile = profile },
        (err) => {
          this.error = handleError(err);
          this.loading = false;
          this.profile = null;
        },
        () => { this.loading = false; }
      )
  }

  resetAlerts() {
    this.error = null;
    this.loading = false;
  }

}
