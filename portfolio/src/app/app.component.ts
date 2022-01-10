import { Component, OnInit } from '@angular/core';
import { Inject} from "@angular/core";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    console.log("Key: " + "%cHello World", "color: white;");
  }

  goToTop() {
    this.document.body.scrollTop = 0;
    console.log('ciao');
  }
}
