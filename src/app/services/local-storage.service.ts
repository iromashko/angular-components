import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ILocalStorage } from './ILocalStorage';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly stateKey = 'state';
  private state: ILocalStorage;
  public state$ = new BehaviorSubject<ILocalStorage>({});

  constructor(@Inject('LocalStorage') public localStorage: Storage) {
    this.state = JSON.parse(this.localStorage.getItem(this.stateKey) || '{}');
    Object.freeze(this.state);
    this.state$.next(this.state);
  }

  public setState(key: string, value: any): void {
    this.state = { ...this.state, [key]: value };
    this.localStorage.setItem(this.stateKey, JSON.stringify(this.state));
    Object.freeze(this.state);
    this.state$.next(this.state);
  }
}
