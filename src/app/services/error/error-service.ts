import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private readonly error = new BehaviorSubject(false);
  public readonly error$ = this.error.asObservable();

  public show(): void {
    this.error.next(true);
  }

  public hide(): void {
    this.error.next(false);
  }
}
