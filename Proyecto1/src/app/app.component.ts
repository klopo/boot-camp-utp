import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
camilo: Person;
  constructor() {
    this.camilo = new Person('03', 'Camilo Agudeloooooo', 28);
  }
}
