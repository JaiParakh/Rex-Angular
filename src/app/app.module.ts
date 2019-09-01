import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RexHomeComponent } from './rex-home/rex-home.component';
import { NavbarComponent } from './rex-home/navbar/navbar.component';
import { CreateMailComponent } from './rex-home/navbar/create-mail/create-mail.component';
import { NavItemsComponent } from './rex-home/navbar/nav-items/nav-items.component';
import { HeaderComponent } from './rex-music/header/header.component';
import { BodyComponent } from './rex-music/body/body.component';
import { NowPlayingBarComponent } from './rex-music/now-playing-bar/now-playing-bar.component';
import { RexMusicComponent } from './rex-music/rex-music.component';

@NgModule({
  declarations: [
    AppComponent,
    RexHomeComponent,
    NavbarComponent,
    CreateMailComponent,
    NavItemsComponent,
    HeaderComponent,
    BodyComponent,
    NowPlayingBarComponent,
    RexMusicComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
