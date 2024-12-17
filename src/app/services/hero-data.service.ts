import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISuperhero } from '../models/ISuperhero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroDataService {
  private selectedHeroSubject: BehaviorSubject<ISuperhero | null> =
    new BehaviorSubject<ISuperhero | null>(null);
  constructor() {}

  //Metodo para obtener el heroe seleccionado
  getSelectedHero() {
    return this.selectedHeroSubject.asObservable(); //Devuelve un observable
  }

  //Metodo para seleccionar un heroe
  setSelectedHero(heroe: ISuperhero): void {
    this.selectedHeroSubject.next(heroe);
  }
}
