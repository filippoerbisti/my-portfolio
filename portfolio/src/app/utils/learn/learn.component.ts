import { Component, OnInit } from '@angular/core';
import { learns } from 'src/app/share/store/learn-data-store';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  toggleProperty = false;

  public learns:any = learns;

  constructor() { }

  ngOnInit() {
  }

  toggle(learn: any) {
    learn.property = !learn.property;
  }

  values = '';

  onKey(event: any) {
    this.values = event.target.value;
  }

}
