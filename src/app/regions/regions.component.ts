import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Observable, EMPTY } from 'rxjs';
import { Country } from './country';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regions = [{name: 'europe', id: 1}, {name: 'asia', id: 2}];
  errorMessage = '';
  countries = [];
  countryDetails;

  constructor(private service: CountriesService) { }
  ngOnInit() {
  }
  public onSelected(region) {
    this.service.getCountriesByRegion(region).subscribe(
      res => {
        this.countries = res;
      }
    );
  }
  public onSelectedCountry(country) {
   this.countryDetails = this.countries.find(c => c.name === country);
  }
}
