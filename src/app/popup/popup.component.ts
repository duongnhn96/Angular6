import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  constructor(private bookService: BookService) { }
  addBook(title: string, desc: string, author: string, cover: string) {
    const book = {
      title: title,
      detail: desc,
      cover: cover,
      author: author
    };
    this.bookService.addBooks(book).subscribe(value => {
      alert('Thêm thành công!');
      console.log(value);
    });
  }
  ngOnInit() {
  }

}
