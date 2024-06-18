import { Injectable, effect, inject, signal } from "@angular/core";
import { StorageService } from "./storage.service";
import { TvShowId, TvShowIds } from "./types";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private readonly FAVORITES_KEY = "favorites";
  private storage = inject(StorageService);
  private favoritesSignal = signal<TvShowIds>(this.storage.get<TvShowIds>(this.FAVORITES_KEY));
  readonly favorites = this.favoritesSignal.asReadonly();

  constructor() {
    // Registering an effect to update localStorage so this code will run no matter
    // where and when the signal value is updated - no need for duplication
    effect(() => this.storage.set<TvShowIds>(this.FAVORITES_KEY, this.favoritesSignal()));
  }

  toggleFavorite(id: TvShowId): void {
    const currentFavorites = this.favoritesSignal();
    const index = currentFavorites.indexOf(id);
    if (index !== -1) {
      this.favoritesSignal.update(favorites => {
        const newFavorites = [...favorites];
        newFavorites.splice(index, 1);
        return newFavorites;
      });
    } else {
      this.favoritesSignal.update(favorites => {
        return [...favorites, id];
      });
    }
  }
}
