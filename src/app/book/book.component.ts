import { Ibook } from './ibook';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'duong-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})

export class BookComponent implements OnInit {

    @Input() book: Ibook[];
    @Output() getBook: EventEmitter<any> = new EventEmitter<any>();

    download(): void {
        this.getBook.emit(this.book);
    }
    ngOnInit(): void {
    }
}
