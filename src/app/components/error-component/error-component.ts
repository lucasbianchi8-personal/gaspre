import { Component, output } from '@angular/core';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.html',
})
export class ErrorComponent {

  public readonly onClose = output<void>();

  public close(): void {
    this.onClose.emit();
  }
}
