import { Component, Input, OnInit, Output } from '@angular/core';
import { ISuperhero } from 'src/app/models/ISuperhero.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() heroe!: ISuperhero;

  constructor() {}

  ngOnInit(): void {}
}
