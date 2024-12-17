import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { HeroDataService } from 'src/app/services/hero-data.service';

@Component({
  selector: 'app-detail-hero',
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css'],
})
export class DetailHeroComponent implements OnInit {
  Heroe: ISuperhero | null = null;
  subscription!: Subscription;
  constructor(private heroData: HeroDataService) {}

  ngOnInit(): void {
    this.subscription = this.heroData
      .getSelectedHero()
      .subscribe((response) => {
        this.Heroe = response;
        console.log(response);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
