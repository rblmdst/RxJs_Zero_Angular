import { Component, inject } from '@angular/core';
import { Country } from '../../models';
import { CountryList } from '../../ui/country-list/country-list.component';
import { SearchForm } from '../search-form';

@Component({
  selector: 'search-page',
  standalone: true,
  imports: [SearchForm, CountryList],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
})
export class SearchPage {
  countries: Country[] = [];

  onResult(countries: Country[]) {
    this.countries = countries;
  }
}
