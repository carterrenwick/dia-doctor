import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BgReading } from '../models/BgReading';

@Injectable({
  providedIn: 'root'
})
export class BgService {

  constructor(private http: HttpClient) { }

  getBgReadings() {
    const getBgReadingsUrl = environment.BgReadings.getBgReadings();
    return this.http.get<BgReading[]>(getBgReadingsUrl);
  }
}
