import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  nombreBusqueda: string = '';
  constructor(
    private restService: RestService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cargarHeroes();

    // Captura el parámetro 'myUrl' y realiza la búsqueda (desde buscador component)
    this.route.queryParams.subscribe((params) => {
      const nombre = params['search'];
      if (nombre) {
        this.buscarHeroes(nombre);
      }
    });
  }

  cargarHeroes() {
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

  private buscarHeroes(nombre: string): void {
    this.restService.searchByName(nombre).subscribe({
      next: (data) => {
        this.ListaHeroes = data.results || [];
        this.nombreBusqueda = nombre;
      },
      error: (err) => {
        console.error('Error en la búsqueda:', err);
        this.ListaHeroes = [];
      },
    });
  }

  onHeroeSelected(hero: ISuperhero): void {
    this.router.navigate(['/detail', hero.id]);
  }
}
