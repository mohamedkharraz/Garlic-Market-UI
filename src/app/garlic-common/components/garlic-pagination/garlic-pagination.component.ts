import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'garlic-pagination',
  templateUrl: './garlic-pagination.component.html',
  styleUrls: ['./garlic-pagination.component.css']
})
export class GarlicPaginationComponent implements OnInit, OnChanges {

  @Input() items: any[];
  @Input() perPage: number = 10;
  @Input() f = (item: any, expression: string) => item;/* = (e: any) => { return this.items }*/;
  @Input() filterToken;
  @Output() actualise = new EventEmitter<any[]>();
  currentPage: number = 1;
  savedItems: any[];



  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.filterToken.firstChange) {
      this.currentPage = 1;
      if (changes.filterToken) {
        this.items = this.savedItems.filter(item => this.f(item, this.filterToken));
      } else {
        this.items = [... this.savedItems];
      }
      this.emitCurrentValues();
    }
  }

  ngOnInit(): void {
    this.savedItems = this.items;
    this.emitCurrentValues();
  }

  paginate(page: string) {
    switch (page) {
      case 'prev':
        if (this.currentPage !== 1) {
          this.currentPage--;
          this.emitCurrentValues();
        }
        break;
      case 'next':
        if (this.max !== 0 && this.currentPage !== this.max) {
          this.currentPage++;
          this.emitCurrentValues();
        }
        break;
      case 'first':
        if (this.currentPage !== 1) {
          this.currentPage = 1;
          this.emitCurrentValues();
        }
        break;
      case 'last':
        if (this.max !== 0 && this.currentPage !== this.max) {
          this.currentPage = this.max;
          this.emitCurrentValues();
        }
        break;
      default: break;
    }
    return false;
  }
  emitCurrentValues() {
    let currentItems = this.items.slice(this.from, this.to);
    this.actualise.emit(currentItems);
  }

  private get from() {
    return (this.currentPage - 1) * this.perPage;
  }
  private get to() {
    return this.perPage * this.currentPage >= this.items.length ? this.items.length : this.currentPage * this.perPage;
  }
  public get max(): number {
    return Math.trunc(this.items.length % this.perPage === 0 ? this.items.length / this.perPage : this.items.length / this.perPage + 1);
  }

}
