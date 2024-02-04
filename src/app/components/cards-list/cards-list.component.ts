import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Location } from '../../types/location.interface';




@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit{

  @Input() unitsList: Location[] = [];

  constructor(){
  }

  ngOnInit(): void{
  }
}
