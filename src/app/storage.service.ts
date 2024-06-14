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
