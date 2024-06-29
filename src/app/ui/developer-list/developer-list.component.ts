import { Component, input, output } from '@angular/core';
import { Developer } from '../../models';

@Component({
  selector: 'developer-list',
  standalone: true,
  imports: [],
  templateUrl: './developer-list.component.html',
  styleUrl: './developer-list.component.scss',
})
export class DeveloperList {
  developers = input.required<Developer[]>();
  details = output<Developer>();

  displayDetails(developer: Developer) {
    this.details.emit(developer);
  }
}
