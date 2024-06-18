import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShow } from '../types';
import { FavoritesService } from '../favorites.service';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent {
  protected favoritesService = inject(FavoritesService);
  
  @Input({required: true})
  shows!: TvShow[];
  @Input()
  isLoading = false;
}
