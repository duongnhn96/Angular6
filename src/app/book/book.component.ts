import { Component } from '@angular/core';

@Component({
    selector: 'duong-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})

export class BookComponent {
    title = 'app';
    bookCover: String = '../../assets/img/book.jpg';

}
