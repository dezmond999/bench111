import { Component } from '@angular/core';

interface Book {
  id: number;
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
    "Купить молоко",
    "Пойти в магазин",
    "Сделать домашку",
    "Пойти на тренировку",
    "Пойти спать"
  ]
  books: Book[] = [
    {
      id: 1,
      title: "Книга 1",
      author: "Пушкин А.С.",
      description: "Описание книги приколлллл"
    },
    {
      id: 2,
      title: "Книга 2",
      author: "Достоевский Л.Н.",
      description: "Описание книги 2"
    }
  ];
  btnClick() {
    this.myName = this.myName + "!";
  }
}
