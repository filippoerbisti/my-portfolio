import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { GameCardComponent } from './game-card/game-card.component';
import { SecretKeyDialogComponent } from './secret-key-dialog/secret-key-dialog.component';
import { RestartGameDialogComponent } from './restart-game-dialog/restart-game-dialog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    GameCardComponent,
    SecretKeyDialogComponent,
    RestartGameDialogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
