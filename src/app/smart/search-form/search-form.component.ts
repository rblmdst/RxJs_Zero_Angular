import { Component, inject, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Country } from '../../models';
import { ApiService } from '../../services';

let id = 0;
@Component({
  selector: 'search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchForm {
  _id = 's-' + id++;
  label = input.required<string>();
  results = output<Country[]>();

  countries: Country[] = [];
  apiService = inject(ApiService);

  // Search input
  searchCtrl = new FormControl();

  constructor() {
    this.searchCtrl.valueChanges;
    // TODO fetch countries and emit the list (the component is sort of blackbox here)
    // this.apiService.searchCountry(searchText)
    // this.results.emit(countries);
  }
}
