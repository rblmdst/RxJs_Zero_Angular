import { Component, inject } from '@angular/core';
import { DetailsBlock, DeveloperList, Filter, Level, Type } from '../../ui';
import { ApiService } from '../../services';
import { Developer } from '../../models';
import { concatMap } from 'rxjs';

@Component({
  selector: 'filter-page',
  standalone: true,
  imports: [Filter, DeveloperList, DetailsBlock],
  templateUrl: './filter-page.component.html',
  styleUrl: './filter-page.component.scss',
})
export class FilterPage {
  apiService = inject(ApiService);

  developers: Developer[] = [];

  currentDevCountry: string | null = null;
  currentDevCountryCurrency: string | null = null;

  onFilter(criteria: { level: Level | null; type: Type | null }) {
    this.currentDevCountry = null;
    this.currentDevCountryCurrency = null;
    this.apiService.filterDeveloper(criteria).subscribe((developers) => {
      this.developers = developers;
      console.log(this.developers);
    });
  }

  onDetails(developer: Developer) {
    // TODO: Display the selected dev Country + Country Currency
    // fetch and display country :
    //  countryByNumericCode(devCountry) // { name: string; code: string; ...}
    // fetch and display country currency :
    //  countryCurrencyInfos(code); // { currencyName: string; ... }
  }
}
