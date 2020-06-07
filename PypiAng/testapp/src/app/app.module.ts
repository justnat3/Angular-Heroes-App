import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
