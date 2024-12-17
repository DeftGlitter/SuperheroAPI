import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { HeroDataService } from 'src/app/services/hero-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() heroe!: ISuperhero; //Pasamos el heroe para que lo muestre por pantalla
  @Output() heroeSelected: EventEmitter<ISuperhero> =
    new EventEmitter<ISuperhero>(); //Pasa la info del superheroe seleccionado

  constructor(private heroData: HeroDataService) {}

  ngOnInit(): void {}

  onSelectHeroe(): void {
    this.heroData.setSelectedHero(this.heroe);
    this.heroeSelected.emit(this.heroe);
  }
}
