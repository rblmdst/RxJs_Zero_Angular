import { Component, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

export type Level = 'junior' | 'mid' | 'senior' | 'expert';
export type Type = 'backend' | 'frontend' | 'fullstack';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class Filter {
  levelCtrl = new FormControl<Level | null>(null);
  typeCtrl = new FormControl<Type | null>(null);

  levels: Array<Level> = ['junior', 'mid', 'senior', 'expert'];
  types: Array<Type> = ['frontend', 'backend', 'fullstack'];

  filter = output<{
    level: Level | null;
    type: Type | null;
  }>();

  constructor() {
    const level$ = this.levelCtrl.valueChanges;
    const type$ = this.typeCtrl.valueChanges;

    // TODO: emit the right combination
    this.filter.emit({ level: null, type: null });
  }
}
