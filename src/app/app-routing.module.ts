import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { KanjiDisplayComponent } from './page/kanjiPage/kanji-display/kanji-display.component';
import { KanjiCardComponent } from './page/kanjiPage/kanji-card/kanji-card.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'kanjiList', component: KanjiDisplayComponent},
  { path: 'kanji/:id', component: KanjiCardComponent },

  // Change this empty path to redirect to home page
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
