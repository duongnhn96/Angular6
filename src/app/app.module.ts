import { BookComponent } from './book/book.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookService, AuthticationService } from './services';
import { BookSearchResultsComponent } from './book-search-results/book-search-results.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LayoutComponent,
    HeaderComponent,
    BannerComponent,
    BookshelfComponent,
    NavbarComponent,
    BookSearchResultsComponent,
    PopupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService, AuthticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
