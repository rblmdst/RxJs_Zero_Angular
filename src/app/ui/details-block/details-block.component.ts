import { Component, input } from '@angular/core';

@Component({
  selector: 'details-block',
  standalone: true,
  imports: [],
  templateUrl: './details-block.component.html',
  styleUrl: './details-block.component.scss',
})
export class DetailsBlock {
  country = input<string | null>();
  currency = input<string | null>();
}
