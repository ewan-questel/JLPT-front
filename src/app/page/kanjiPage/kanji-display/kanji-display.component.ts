import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestKanjiListService } from 'src/app/request-kanji-list.service';


@Component({
  selector: 'app-kanji-display',
  templateUrl: 'kanji-display.component.html',
  styleUrls: ['kanji-display.component.scss']
})
export class KanjiDisplayComponent {

  kanjiData: any;
  jlptLevels: number[] = [5, 4, 3, 2, 1];
  selectedJlptLevel: number = 5;

  constructor(
    private displayKanji: RequestKanjiListService,
    private router: Router
    ) {}

  ngOnInit(): void {
    /* this.displayKanji.getKanjiData().subscribe(data => {
      // Filter Kanji data where jlpt_level is 5
      this.kanjiData = data.filter((kanji: any) => kanji.jlpt_level === 5);
    }); */
    this.fetchKanjiData();
  }

  fetchKanjiData(): void {
    this.displayKanji.getKanjiData().subscribe(data => {
      // Filter Kanji data based on the selected jlpt_level
      this.kanjiData = data.filter((kanji: any) => kanji.jlpt_level === +this.selectedJlptLevel);
    });
  }

  goToKanji(kanji: any) {
    this.router.navigate(['/kanji', kanji.id]);
  }

  goToHomepage() {
    this.router.navigate(['/homepage']);
  }

  onJlptLevelChange(newJlptLevel: number): void {
    this.selectedJlptLevel = newJlptLevel;
    this.fetchKanjiData(); // Fetch Kanji data based on the new selectedJlptLevel
  }
}
