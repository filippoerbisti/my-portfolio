import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  angularSkill = 85;
  vueSkill = 70;
  cssSkill = 70;
  typescriptSkill = 75;

  sqlSkill = 80;
  laravelSkill = 80;
  phpSkill = 75;
  csharpSkill = 50;
  

  constructor() { }

  ngOnInit(): void {
  }

}
