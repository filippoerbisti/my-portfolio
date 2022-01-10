import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { learns } from 'src/app/share/store/learn-data-store';
import { Pipe } from '@angular/compiler/src/core';

import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public learns:any = learns;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

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
