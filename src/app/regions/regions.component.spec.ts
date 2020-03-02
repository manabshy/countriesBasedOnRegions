import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegionsComponent } from './regions.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromState from '../state/';

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;
  let store;
  const regions = [{name: 'asia', id: 1}, { name: 'europe', id: 2}];
  const countries = [{name: 'india', id: 1}, {name: 'china', id: 2}];
  beforeEach(async(() => {
    store = jasmine.createSpyObj(['dispatch', 'pipe', 'subscribe']);

    TestBed.configureTestingModule({
      declarations: [ RegionsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers:  [{ provide: Store, useValue: store },
        provideMockStore({
          selectors: [
            { selector: fromState.getRegions, value: regions },
            { selector: fromState.getCountries, value: countries },

          ],
        }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should able to get the regions from state', () => {
    expect(component.regions.length).toBe(2);
  })
  it('should able to get the list of countries by region name', () => {
    component.onSelected('asia');
    expect(component.countries.length).toBe(2);
  });
  it('should able to get the selected country details', () => {
    component.countries = countries;
    component.onSelectedCountry('india');
    expect(component.countryDetails).toBeDefined();
  });

});
