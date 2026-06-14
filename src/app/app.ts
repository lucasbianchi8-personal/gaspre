import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader/loader-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { LoaderComponent } from "./components/loader-component/loader-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  private readonly loaderService = inject(LoaderService);

  public readonly loading = toSignal(this.loaderService.loading$, { initialValue: false } );
}
