import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private count = 0;
  private readonly loading = new BehaviorSubject(false);
  public readonly loading$ = this.loading.asObservable();

  public show(): void {
    this.count++;
    this.loading.next(true)
  }

  public hide(): void {
    this.count--;

    if (this.count <= 0) {
      this.count = 0;
      this.loading.next(false);
    }
  }
}
