import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ISuperhero } from 'src/app/models/ISuperhero.model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ListaHeroes: ISuperhero[] = [];
  constructor(private restService: RestService, private router: Router) {}

  ngOnInit(): void {
    const peticiones = []; //array vacío donde se guardarán todas las peticiones HTTP

    // Crear un array con las peticiones
    for (let index = 1; index <= 20; index++) {
      peticiones.push(this.restService.getHero(index.toString()));
    }

    forkJoin(peticiones).subscribe((resultados) => {
      //forkJoin es de RxJS - Espera a que todos los observables (todas las peticiones HTTP) se completen
      this.ListaHeroes = resultados;
      console.log(this.ListaHeroes);

      // Ordenar por ID (convertir a número para asegurar orden correcto)
      this.ListaHeroes.sort((a, b) => Number(a.id) - Number(b.id));
    });
  }

  getDatos(id: string) {
    this.restService.getHero(id).subscribe((response) => {
      this.ListaHeroes.push(response); //guardamos la peticion en el array Listaheroes
    });
  }

  onHeroeSelected(hero: ISuperhero): void {
    this.router.navigate(['/detail']);
  }
}
