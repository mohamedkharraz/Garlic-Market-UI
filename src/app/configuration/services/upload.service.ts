import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private domain = '127.0.0.1';
  private port = '7070';
  private protocol = 'http://';

  private uploadFileEndPoint = '/utils/tickers-upload';

  constructor(private http: HttpClient) {}

  uploadTickersFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    const req = new HttpRequest(
      'POST',
      `${this.protocol}${this.domain}:${this.port}${this.uploadFileEndPoint}`,
      formData,
      { reportProgress: true }
    );
    return this.http.request(req);
    /*return this.http.post(
      `${this.protocol}${this.domain}:${this.port}${this.uploadFileEndPoint}`,
      formData,
      { reportProgress: true }
    );*/
  }
}
