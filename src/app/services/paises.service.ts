import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  url: string = 'https://restcountries.com/v3.1/region/europe';
  constructor(private http: HttpClient) {}

  getPaises(): Promise<any[]> {
    return lastValueFrom(this.http.get<any[]>(this.url));
  }

}
