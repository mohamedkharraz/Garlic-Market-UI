import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { HttpEventType } from '@angular/common/http';
import { handleError } from '../../../garlic-common/Utils';

declare var $:any;

@Component({
  selector: 'app-ticker-upload',
  templateUrl: './ticker-upload.component.html',
  styleUrls: ['./ticker-upload.component.css'],
})
export class TickerUploadComponent implements OnInit {
  @ViewChild('tickersFile') tickersFile: ElementRef;
  file: File;
  progress: number = 0;
  isCompleted: boolean = false;
  isFailed: boolean = false;
  error: string;

  constructor(private service: UploadService) {}

  ngOnInit(): void {
    $('[data-toggle="tooltip"]').tooltip();
  }

  onChange(event: any) {
    this.file = this.tickersFile.nativeElement.files[0];
  }

  onClearClick(event: any) {
    this.file = null;
    this.reset();
  }

  reset() {
    this.progress = 0;
    this.isFailed = false;
    this.isCompleted = false;
    this.error = null;
  }

  send() {
    this.reset();
    this.service.uploadTickersFile(this.file).subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round((100 * event.loaded) / event.total);
      },
      (err) => {
        console.log(err);
        this.isFailed = true;
        this.error = handleError(err);
      },
      () => {
        this.isCompleted = true;
      }
    );
  }
}
