import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
  
  constructor(private formBuilder: FormBuilder){

  };

  ngOnInit(): void{
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    });
  }

  onSubmit(){
    console.log(this.formGroup.value)
  }

  onClean(){
    console.log("this.formGroup.value")
  }

}
