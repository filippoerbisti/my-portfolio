import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'portfolio';

  @Output() scrollToTop = new EventEmitter<void>();

  constructor() { }

  onScrollToTop(): void {
    this.scrollToTop.emit();
  }

}
