import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestKanjiListService {
  private apiUrl = 'http://127.0.0.1:8000/api/kanji';

  constructor(private http: HttpClient) { }

  getKanjiData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getKanjiDetailsById(kanjiId: string): Observable<any> {
    const url = `${this.apiUrl}/${kanjiId}`; // Assuming your API endpoint supports /api/kanji/{id}
    return this.http.get<any>(url);
  }
}
