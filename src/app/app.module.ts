import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import {FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LayoutComponent,
    HeaderComponent,
    BannerComponent,
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
