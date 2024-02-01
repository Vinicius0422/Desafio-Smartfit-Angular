import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService){
  };

  ngOnInit(): void{
    this.getUnitsService.getAllUnits().subscribe(data => {
      this.results = data.locations
      this.filteredResults = data.locations
    })
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });
  }

  onSubmit(){
    if(!this.formGroup.value.showClosed){
      this.filteredResults = this.results.filter(location => location.opened === true)
    } else{
      this.filteredResults = this.results;
    }
    
  }

  onClean(){
    console.log("this.formGroup.value")
  }

}
