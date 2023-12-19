import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{ kanjiList[1] }}!</h1>`
})
export class AppComponent implements OnInit {
  kanjiList = ['一','二','三'];

  ngOnInit() {
    console.table(this.kanjiList);
    this.selectKanji('一');
  }

  selectKanji(kanji: string) {
    console.log(`Vous avez cliué sur le kanji ${kanji}`);
  }
}
