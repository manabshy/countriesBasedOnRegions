import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let countryService: CountriesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [

        CountriesService,
      ],
    });
    countryService = TestBed.inject(CountriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: CountriesService = TestBed.get(CountriesService);
    expect(service).toBeTruthy();
  });

  describe('getCountriesByRegion', () => {
    it('should return the list of countries based on region name', () => {
      const region = 'asia';
      const countriesUrl = 'https://restcountries.eu/rest/v2/region';
      const url = `${countriesUrl}/${region}`

      countryService.getCountriesByRegion(region).subscribe(name => {
        expect(name).toBe('asia');
      });

      const baseUrl: TestRequest = httpTestingController.expectOne(url);
      expect(baseUrl.request.method).toEqual('GET');
      baseUrl.flush(region);
    });
  });
});
