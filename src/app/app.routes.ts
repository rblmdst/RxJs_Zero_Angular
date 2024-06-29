import { Routes } from '@angular/router';
import { FilterPage } from './smart/filter-page/filter-page.component';
import { SearchPage } from './smart/search-page/search-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/filter' },
  { path: 'filter', component: FilterPage },
  { path: 'search', component: SearchPage },
];
