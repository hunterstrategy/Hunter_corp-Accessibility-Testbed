import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotspot-max',
  templateUrl: './hotspot-max.component.html',
  styleUrls: ['./hotspot-max.component.scss']
})
export class HotspotMaxComponent implements OnInit {

  
  form: FormGroup;
  selectedOptionlength : number;
  maxOptions: number = 2;

  optionsData = [
    { id: 1, name: 'Maine', class: "hotspot-option-1", label: "Option 1 of 4 on Maine." },
    { id: 2, name: 'Virginia', class: "hotspot-option-2", label: "Option 2 of 4 on Virginia."  },
    { id: 3, name: 'California', class: "hotspot-option-3", label: "Option 3 of 4 on California."  },
    { id: 4, name: 'Texas', class: "hotspot-option-4", label: "Option 4 of 4 on Texas."  }
  ];

  get optionsFormArray() {
    return this.form.controls.options as FormArray;
  }

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      options: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.optionsData.forEach(() => this.optionsFormArray.push(new FormControl(false)));
  }

  click() {
  this.selectedOptionlength = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null).length;
  }

  submit() {
    const selectedOptionIds = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null);
      console.log(this.optionsFormArray.controls)
    console.log(selectedOptionIds);
  }

}