import { Component, OnInit } from '@angular/core';
import { RequestKanjiListService } from './request-kanji-list.service';

@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="kanjiData">
    <h1>Kanji Data</h1>
    <ul>
      <li *ngFor="let kanji of kanjiData">
        {{ kanji.character }}
      </li>
    </ul>
  </div>
`,
})
export class AppComponent implements OnInit {
  /* kanjiList = ['一','二','三'];

  ngOnInit() {
    console.table(this.kanjiList);
    this.selectKanji('一');
  }

  selectKanji(kanji: string) {
    console.log(`Vous avez cliué sur le kanji ${kanji}`);
  } */

  kanjiData: any;

  constructor(private displayKanji: RequestKanjiListService) {}

  ngOnInit(): void {
    /* this.displayKanji.getKanjiData().subscribe(data => {
      this.kanjiData = data;
    }); */
    this.displayKanji.getKanjiData().subscribe(data => {
      // Filter Kanji data where jlpt_level is 5
      this.kanjiData = data.filter((kanji: any) => kanji.jlpt_level === 5);
    });
  }

}
