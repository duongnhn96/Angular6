import { books } from './books.mock';
import { data } from './../bookshelf/bookshelf.mock';
import { Injectable } from '@angular/core';
import { IBook, IBookShelfSection } from '../bookshelf/bookshelf.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class BookService {

    constructor(private http: HttpClient) { }

    getBooks(category: string) {
        return this.http.get(`http://localhost:3000/books?categories_like=${category}`).pipe(map(function (res: any[]) {
            const resBooks = res.map(item => {
                const book: IBook = {
                    title: item.title,
                    detail: item.desc,
                    cover: item.cover,
                    author: item.author
                };
                return book;
            });
            return resBooks;
        }));
    }
    addBooks(item: IBook) {
        const rawBook = {
            id: Date.now(),
            title: item.title,
            detail: item.detail,
            cover: item.cover,
            author: item.author,
            categories: 'Basic',
            filter: 'hot'
        };
        return this.http.post(`http://localhost:3000/books`, rawBook);
    }
    searchBooks(keyword: string): IBook[] {
        if (!keyword) {
            return [];
        }
        return books.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));
    }
}

