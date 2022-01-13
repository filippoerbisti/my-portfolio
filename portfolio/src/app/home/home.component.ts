import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { learns } from 'src/app/share/store/learn-data-store';
import { MatSnackBar, MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { ApiKey } from 'src/app/home/api_key';
// import * as SibApiV3Sdk from '@sendinblue/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public learns:any = learns;
  // private SibApiV3Sdk:any = SibApiV3Sdk;

  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  durationInSeconds = 3;

  FormData!: FormGroup;
  
  constructor(
    private builder: FormBuilder,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Comment: new FormControl('', [Validators.required])})
  }

  onSubmit() {
    // var SibApiV3Sdk = require('@sendinblue/client');
    // var defaultClient = SibApiV3Sdk.ApiClient.instance;

    // // Configure API key authorization: api-key
    // var apiKey = defaultClient.authentications['api-key'];
    // apiKey.apiKey = ApiKey;

    // // Uncomment below two lines to configure authorization using: partner-key
    // // var partnerKey = defaultClient.authentications['partner-key'];
    // // partnerKey.apiKey = 'YOUR API KEY';

    // var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

    // sendSmtpEmail = {
    //     to: [{
    //         email: 'filippo.erbisti@gmail.com',
    //         name: 'John Doe'
    //     }],
    //     templateId: 59,
    //     params: {
    //         name: 'John',
    //         surname: 'Doe'
    //     },
    //     headers: {
    //         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
    //     }
    // };

    // apiInstance.sendTransacEmail(sendSmtpEmail).then((data: any) => {
    //   console.log('API called successfully. Returned data: ' + data);
    //   this.snackBar.open("Email inviata con successo!", '', {
    //     horizontalPosition: this.horizontalPosition,
    //     duration: this.durationInSeconds * 1000
    //   });
    // }, (error: any) => {
    //   console.error(error);
    //   this.snackBar.open("Email inviata con successo!", '', {
    //     horizontalPosition: this.horizontalPosition,
    //     duration: this.durationInSeconds * 1000
    //   });
    // });
    
  }

}
