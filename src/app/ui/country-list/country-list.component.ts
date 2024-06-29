import { Component, input } from '@angular/core';
import { Country } from '../../models';

@Component({
  selector: 'country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryList {
  countries = input.required<Country[]>();
}
