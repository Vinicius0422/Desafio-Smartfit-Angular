import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';
import { CardComponent } from './components/card/card.component';
import { LegendComponent } from './components/legend/legend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FormComponent, CardsListComponent, LegendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  unitsList: Location[] = [];
  showList = new BehaviorSubject(false);

  constructor(private getUnitsService: GetUnitsService){

  }

  onSubmit(){
    this.unitsList = this.getUnitsService.getFilteredUnits();
    this.showList.next(true);
  }
  

}
