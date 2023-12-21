import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanjiDisplayComponent } from './page/kanjiPage/kanji-display/kanji-display.component';
import { KanjiCardComponent } from './page/kanjiPage/kanji-card/kanji-card.component';

const routes: Routes = [
  { path: 'kanjiList', component: KanjiDisplayComponent},
  { path: 'kanji/:id', component: KanjiCardComponent },

  // Change this empty path to redirect to home page
  { path: '', redirectTo: 'kanjiList', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
