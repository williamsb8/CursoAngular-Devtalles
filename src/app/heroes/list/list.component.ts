import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames: string[] = [
    'Spiderman',
    'Hulk',
    'Ant-man',
    'Iron Man',
    'Capitan America',
  ];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero =  this.heroNames.pop();
  }
}
