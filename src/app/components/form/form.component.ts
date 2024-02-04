import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';




@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  @Output() submitEvent = new EventEmitter();

  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private getUnitsService: GetUnitsService,
    private filterUnisService: FilterUnitsService
    ) {
  };

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    });
    this.getUnitsService.getAllUnits().subscribe(data => {
      this.results = data
      this.filteredResults = data;
    })
  }

  onSubmit(): void {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterUnisService.filter(this.results, showClosed, hour)
    this.getUnitsService.setFilteredUnits(this.filteredResults);

    this.submitEvent.emit();
  }
  onClean() {
    this.formGroup.reset();
  }

}
