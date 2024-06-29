import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country, Currency, Developer } from '../models';

const BASE_URL = `http://localhost:3000`;
const DEV_ENDPOINT = `${BASE_URL}/developers`;
const COUNTRY_ENDPOINT = `${BASE_URL}/countries`;
const CURRENCY_ENDPOINT = `${BASE_URL}/currencies`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  // localhost:3000/developers?type=frontend&level=expert
  // localhost:3000/countries?name=to
  // localhost:3000/currencies/TT
  constructor() {}

  getCountryByNumericCode(numericCode: string) {
    return this.http.get<Country>(`${COUNTRY_ENDPOINT}/${numericCode}`);
  }

  searchCountry(searchText: string) {
    return this.http.get<Country[]>(`${COUNTRY_ENDPOINT}?name=${searchText}`);
  }

  filterDeveloper(criteria?: { type: string | null; level: string | null }) {
    if (criteria && (criteria.level || criteria.type)) {
      return this.http.get<Developer[]>(
        `${DEV_ENDPOINT}?${this.toURLSting(criteria)}`
      );
    }
    return this.http.get<Developer[]>(`${DEV_ENDPOINT}`);
  }

  getCountryCurrencyInfos(countryCode: string) {
    return this.http.get<Currency>(`${CURRENCY_ENDPOINT}/${countryCode}`);
  }

  private toURLSting(obj: { [k: string]: string | null }) {
    const url = new URLSearchParams('');
    Object.entries(obj).forEach(([key, val]) => {
      if (val !== null) {
        url.append(key, val);
      }
    });
    return url.toString();
  }
}
