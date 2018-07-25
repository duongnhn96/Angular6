import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'duong-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor() {
   }
  keywork: String = '' ;
  books: String[] = ['Book 1', 'Angular', 'JQuery', 'My String', 'NodeJS', 'Duong', 'Nam', 'Hacker'];
  tempBooks: String[] = [];
  Search(keywork): void {
    this.tempBooks = this.books.filter(b => b.toLowerCase().includes(keywork));
  }
  ngOnInit() {
    this.tempBooks = this.books;
  }

}
