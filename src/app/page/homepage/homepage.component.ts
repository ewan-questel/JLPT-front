import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  goToPanel1() {
    this.router.navigate(['/panel1']);
  }

  goToPanel2() {
    this.router.navigate(['/panel2']);
  }

  goToKanjiPage() {
    this.router.navigate(['/kanjiList']);
  }
}
