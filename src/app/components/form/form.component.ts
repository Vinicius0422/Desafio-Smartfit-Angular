import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { GetUnitsService } from '../../services/get-units.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  results = [];
  formGroup!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService){
  };

  ngOnInit(): void{
    this.getUnitsService.getAllUnits().subscribe(data => console.log(data))
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  onSubmit(){
    
  }

  onClean(){
    console.log("this.formGroup.value")
  }

}
