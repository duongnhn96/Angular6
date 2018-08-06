import { Component, OnInit } from '@angular/core';
import { IBook } from '../bookshelf/bookshelf.interface';
import { BookService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bookResults: IBook[] = [];
  keyword: string;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  search(keyword: string) {
     this.bookResults = this.bookService.searchBooks(keyword);
  }



}
