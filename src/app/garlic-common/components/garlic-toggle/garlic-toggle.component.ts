import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'garlic-toggle',
  templateUrl: './garlic-toggle.component.html',
  styleUrls: ['./garlic-toggle.component.css']
})
export class GarlicToggleComponent implements OnInit {

  @Input() checked: boolean;
  @Output() changed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.checked = event.target.checked;
    this.changed.emit(this.checked);
  }

}
