import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SecretKeyDialogComponent } from '../dialog/secret-key-dialog/secret-key-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goToProject() {
    this.router.navigateByUrl('/project');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  // goToLearn() {
  //   this.router.navigateByUrl('/learn');
  // }

  openSecretKeyDialog() {
    const dialogRef = this.dialog.open(SecretKeyDialogComponent);
  }

}
