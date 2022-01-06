import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, Validators } from '@angular/forms';

import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';


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

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    message: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private netlifyForms: NetlifyFormsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.netlifyForms.submitFeedback(this.contactForm.value).subscribe(
       () => {
         this.contactForm.reset();
       },
     );
    }

}
