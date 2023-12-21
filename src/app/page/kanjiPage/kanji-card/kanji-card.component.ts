import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestKanjiListService } from 'src/app/request-kanji-list.service';

@Component({
  selector: 'app-kanji-card',
  templateUrl: 'kanji-card.component.html',
  styles: [
    // Add any styles if needed
  ]
})
export class KanjiCardComponent implements OnInit {
  kanji: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private kanjiService: RequestKanjiListService
  ) {}

  ngOnInit(): void {
    const kanjiId: string | null = this.route.snapshot.paramMap.get('id');

    if (kanjiId) {
      this.kanjiService.getKanjiDetailsById(kanjiId).subscribe((data) => {
        this.kanji = data;
      });
    }
  }

  goToKanjiList() {
    this.router.navigate(['/kanjiList']);
  }
}