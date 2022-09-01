import { TopFiveInterface } from './../models/topfive.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() topfives!: TopFiveInterface;
  constructor() { }

  ngOnInit(): void {
    console.log('topfives:', this.topfives);
  }

}
