/**
 * A specific service to handle LocalStorage. Think about reusability, think about generics.
 * Make the service generic enough to handle all kinds of data.
 * Preserve type safety by relying on generics.
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) ?? "[]") as T;
  }

  set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
