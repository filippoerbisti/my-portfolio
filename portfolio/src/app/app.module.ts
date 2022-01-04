import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './utils/project/project.component';
import { AboutComponent } from './utils/about/about.component';
import { FooterComponent } from './utils/footer/footer.component';
import { GameCardComponent } from './utils/game-card/game-card.component';
import { SecretKeyDialogComponent } from './dialog/secret-key-dialog/secret-key-dialog.component';
import { RestartGameDialogComponent } from './dialog/restart-game-dialog/restart-game-dialog.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { PlayGameComponent } from './utils/play-game/play-game.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    GameCardComponent,
    SecretKeyDialogComponent,
    RestartGameDialogComponent,
    FooterComponent,
    NavbarComponent,
    PlayGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
