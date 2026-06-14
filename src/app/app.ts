import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader/loader-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderComponent } from "./components/loader-component/loader-component";
import { ErrorService } from './services/error/error-service';
import { ErrorComponent } from "./components/error-component/error-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, ErrorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly loaderService = inject(LoaderService);
  private readonly errorService = inject(ErrorService);

  public readonly loading = toSignal(this.loaderService.loading$, { initialValue: false } );
  public readonly error = toSignal(this.errorService.error$, { initialValue: false } );

  public closeError(): void {
    this.errorService.hide();
  }
}
