import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/servicies/characters.service';

@Component({
  selector: 'app-chars',
  templateUrl: './chars.component.html',
  styleUrls: ['./chars.component.css'],
})
export class CharsComponent implements OnInit {
  characters: any = [];
  filteredChars: any = [];
  constructor(private service: CharactersService) {}

  async ngOnInit() {
    const characters: any = await this.service.getAll();
    this.characters = characters;
    this.filteredChars = characters;
  }
  busqueda: string = '';
  refreshChars() {
    console.log('yey');
    this.filteredChars = this.characters.filter((x: any) =>
      x.name.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
