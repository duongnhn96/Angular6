import { Ibook } from './../book/ibook';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'duong-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor() {

  }
  keywork: String = '';
  books: Ibook[];
  tempBooks: Ibook[];
  Search(keywork): void {

    this.tempBooks = this.books.filter(b => b.bookTitle.toLowerCase().includes(keywork.toLowerCase()));

  }
  onGetBook(book: any) {
    alert(book.bookCover);
  }
  ngOnInit() {
    this.books = [{
      bookTitle: 'Duong hello',
      bookCover: 'assets/img/book.jpg'
    },
    {
      bookTitle: 'Duong hell555o',
      bookCover: 'assets/img/book.jpg'
    },
    {
      bookTitle: 'Duong hel555lo',
      bookCover: 'assets/img/book.jpg'
    },
    {
      bookTitle: 'Duong hel55\lo',
      bookCover: 'assets/img/book.jpg'
    },
    {
      bookTitle: 'Duong hefdddfsllo',
      bookCover: 'assets/img/book.jpg'
    },
    {
      bookTitle: 'Duong hellfsdfdo',
      bookCover: 'assets/img/book.jpg'
    }
    ,
    {
      bookTitle: 'Duong hellfsdfdo',
      bookCover: 'assets/img/book.jpg'
    }
    ,
    {
      bookTitle: 'Duong hellfsdfdo',
      bookCover: 'assets/img/book.jpg'
    }
    ];
    this.tempBooks = this.books;
  }

}
