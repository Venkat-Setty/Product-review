import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private http: HttpClient,
  ) { }

  getCountriesList(): any {
    return this.http.get(
      'https://pastebin.com/raw/k79mKHzG'
    ).pipe(
      map((res: any[]) => res.map((d) => d.country_name)),
    );
  }
}
