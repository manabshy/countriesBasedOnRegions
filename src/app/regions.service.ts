import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {
  regions$ = of([{name: 'europe', id: 1}, {name: 'asia', id: 2}]);
  constructor() { }
}
