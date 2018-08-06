import { IBookShelfSection, IBook } from './bookshelf.interface';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  sections: IBookShelfSection[];

  constructor(private bookService: BookService) { }
  data: Boolean = false;
  showPopup() {
    this.data = true;
  }
  ngOnInit() {
    this.sections = [{
      name: 'Phổ Biến',
      books: [],
      filters: ['basic', 'advance']
    }, {
      name: 'HOT',
      books: [],
      filters: ['basic', 'advance']
    }];

    this.bookService.getBooks('feature').subscribe((books: IBook[]) => {
      this.sections[0].books = books;
    });
    this.bookService.getBooks('hot').subscribe((books: IBook[]) => {
      this.sections[1].books = books;
    });
  }

}

