import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

}
