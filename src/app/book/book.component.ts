import { Component } from '@angular/core';

@Component({
    selector: 'duong-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})

export class BookComponent {
    title = 'app';
    bookTitle: String = 'Angular';
    bookCover: String = '../../assets/img/book.jpg';
    download(): void {
       console.log('aaa');
       this.bookTitle = 'aaa';
    }
}
