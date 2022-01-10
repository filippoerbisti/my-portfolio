import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { learns } from 'src/app/share/store/learn-data-store';
import { Pipe } from '@angular/compiler/src/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public learns:any = learns;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  FormData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService
    ) { }

  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Comment: new FormControl('', [Validators.required])})
  }

  onSubmit(FormData: string) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }

}
