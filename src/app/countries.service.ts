import { Injectable } from '@angular/core';
import { Country } from './regions/country';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesUrl = 'https://restcountries.eu/rest/v2/region';
  constructor(private http: HttpClient) { }

  getCountriesByRegion = (region: string): Observable<any> => {
    const url = `${this.countriesUrl}/${region}`
    return this.http.get(url).pipe(catchError(err => this.handleError(err)));
  };
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
