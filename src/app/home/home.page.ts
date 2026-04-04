import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface Book {
  id: number | null | string;
  title: string;
  author: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
  myName: string = "VK"
  todo: string[] = [
    "Ввести логин",
    "Ввести пароль",
    "Подтвердить вход",
    "Зайти на страницу"
  ]
  newBook: Book = {
    id: null,
    title: "",
    author: "",
    description: "",
  }
  books: Book[] = [
    {
      id: 1,
      title: "Лирика",
      author: "Тютчев",
      description: "Книга 1"
    },
    {
      id: 2,
      title: "Преступление и наказание",
      author: "Достоевский Л.Н.",
      description: "Книга 2"
    }
  ];
  btnClick() {
    this.myName = this.myName + " hello";
    this.books.push({
      id: uuidv4(),
      title: this.newBook.title,
      author: this.newBook.author,
      description: this.newBook.description
    });
    this.newBook = {
      id: null,
      title: "",
      author: "",
      description: ""
    };
  
  };
  deleteBook(id: number | null | string) {
    this.books = this.books.filter(book => book.id !== id);
  }

}
