import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanjiCardComponent } from './page/kanjiPage/kanji-card/kanji-card.component';
import { KanjiDisplayComponent } from './page/kanjiPage/kanji-display/kanji-display.component';

@NgModule({
  declarations: [
    AppComponent,
    KanjiDisplayComponent,
    KanjiCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
