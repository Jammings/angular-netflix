import { Component } from '@angular/core';
import { FilmsInterface } from './models/films.interface';
import { TopFiveInterface } from './models/topfive.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  public Nextflix:string = "Nextflix";


  public accionFilms: FilmsInterface = {
    title: 'Categoría: Acción',
    image: [{
      src:"./assets/images/Accion/ejercitomuertos.jpg",
      alt: "Ejercito de Muertos"
    },
    {
      src:"./assets/images/Accion/elprotector.webp",
      alt: "El Protector"
    },
    {
      src:"./assets/images/Accion/equalizer2.webp",
      alt: "Equalizer 2"
    },
    {
      src:"./assets/images/Accion/heat.webp",
      alt: "Heat"
    },
    {
      src:"./assets/images/Accion/johnwick2.webp",
      alt: "John Wick 2"
    },
  ]
  }

  public animeFilms: FilmsInterface = {
    title: 'Categoría: Anime',
    image: [
      {
        src:"./assets/images/Anime/laputa.webp",
        alt: "LaPuta"
      },
      {
        src:"./assets/images/Anime/evangelion.webp",
        alt: "Evangelion"
      },
      {
        src:"./assets/images/Anime/chihiro.webp",
        alt: "Chihiro"
      },
      {
        src:"./assets/images/Anime/ajin.jpg",
        alt: "Ajin"
      },
      {
        src:"./assets/images/Anime/porcorosso.webp",
        alt: "porcorosso"
      }
    ]
    }
    public comedyFilms: FilmsInterface = {
      title: 'Categoría: Comedia',
      image: [
        {
          src:"./assets/images/Comedia/casi300.webp",
          alt: "Casi 300"
        },
        {
          src:"./assets/images/Comedia/dictador.webp",
          alt: "El Dictador"
        },
        {
          src:"./assets/images/Comedia/familyguy.webp",
          alt: "Family Guy"
        },
        {
          src:"./assets/images/Comedia/scarymovie3.webp",
          alt: "Scary Movie 3"
        },
        {
          src:"./assets/images/Comedia/ted2.webp",
          alt: "Ted 2"
        }
      ]
    }
    public dramaFilms: FilmsInterface = {
      title: 'Categoría: Comedia',
      image: [
        {
          src:"./assets/images/Drama/1917.webp",
          alt: "1917"
        },
        {
          src:"./assets/images/Drama/salvaralsoldado.webp",
          alt: "Salvar al Soldado Ryan"
        },
        {
          src:"./assets/images/Drama/clublucha.webp",
          alt: "Club de la Lucha"
        },
        {
          src:"./assets/images/Drama/scarface.webp",
          alt: "Scarface"
        },
        {
          src:"./assets/images/Drama/culpable.jpg",
          alt: "Culpable"
        }
      ]
    }
      
      public scifiFilms: FilmsInterface = {
        title: 'Categoría: Ciencia ficción',
        image: [
          {
            src:"./assets/images/Sci-fi/watchmen.webp",
            alt: "Watchmen"
          },
          {
            src:"./assets/images/Sci-fi/deepimpact.webp",
            alt: "Deep Impact"
          },
          {
            src:"./assets/images/Sci-fi/jumper.webp",
            alt: "Jumper"
          },
          {
            src:"./assets/images/Sci-fi/transformers.webp",
            alt: "Transformers"
          },
          {
            src:"./assets/images/Sci-fi/doom.webp",
            alt: "Doom"
          }
        ]
  };

public topfives: TopFiveInterface = {
  title: 'TOP 5: Las mejores películas',
  image: [
    {
      src:"./assets/images/Drama/clublucha.webp",
      alt: "Club de la Lucha"
    },
    {
      src:"./assets/images/Drama/scarface.webp",
      alt: "Scarface"
    },
    {
      src:"./assets/images/Sci-fi/watchmen.webp",
      alt: "Watchmen"
    },
    {
      src:"./assets/images/Comedia/casi300.webp",
      alt: "Casi 300"
    },
    {
      src:"./assets/images/Anime/evangelion.webp",
      alt: "Evangelion"
    }
  ]
};
}