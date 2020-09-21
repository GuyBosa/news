import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import has from 'lodash/has';
// import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  constructor(private http: HttpClient) {}

  articles: any[] = [];
  stuff: any;


  getData(): void {
    const url =
      'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=13da7b458a6f4c5b8f7cadd6f8a074c6';
    this.http.get(url).subscribe((res) => {
      this.articles = has(res, 'articles') ? res['articles'] : [];
      console.log(this.articles)
      // todo get searhKeyword from input 
      const searchKeyword = 'nyc';
      // filter by title
      const searchedArticle = this.articles.find((a) =>
        a.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      console.info('***** ', searchedArticle);
    });
        
}
}
