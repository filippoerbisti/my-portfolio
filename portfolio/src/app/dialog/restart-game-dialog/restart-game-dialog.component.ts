import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restart-game-dialog',
  templateUrl: './restart-game-dialog.component.html',
  styleUrls: ['./restart-game-dialog.component.css']
})
export class RestartGameDialogComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

}
