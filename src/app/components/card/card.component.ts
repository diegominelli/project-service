import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  name: string = 'CHARMANDER';
  attributesTypes: string[] = ['FIRE', 'ROCK'];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.service.getPokemon('Picachu');
  }
}
