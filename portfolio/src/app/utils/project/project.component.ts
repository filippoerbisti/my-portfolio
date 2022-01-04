import { Component, OnInit } from '@angular/core';
import { projects } from 'src/app/share/store/project-data-store';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects:any = projects;

  constructor() { }

  ngOnInit(): void {
  }

}
