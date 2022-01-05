import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret-key-dialog',
  templateUrl: './secret-key-dialog.component.html',
  styleUrls: ['./secret-key-dialog.component.css']
})
export class SecretKeyDialogComponent implements OnInit {

  verifyKey!: string;
  correct!: boolean;

  key_1 = 'Hello World';
  key_2 = 'Hello world';
  key_3 = 'hello World';
  key_4 = 'hello world';
  msg = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendAnswer() {
    if (this.verifyKey == this.key_1 || this.verifyKey == this.key_2 || this.verifyKey == this.key_3 || this.verifyKey == this.key_4) {
      this.msg = "Congratulation! You achive the first goal of any developer!";
      this.correct = true;
    }
    else if(this.verifyKey != this.key_1 && this.verifyKey != this.key_2 && this.verifyKey != this.key_3 && this.verifyKey != this.key_4) {
      this.msg = "Incorrect. Try again.";
      this.correct = false;
    }
    else {
      this.msg = '';
    }
    this.verifyKey = '';
  }

}
