import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotspot-max',
  templateUrl: './hotspot-max.component.html',
  styleUrls: ['./hotspot-max.component.scss']
})

/**
 * HotspotMax is a more complex implementation of the original hotspot taking advantage of angular reactive forms.
 *  For example this component sets a max number of selectable options which is then tracked on a hotspot selection.
 * Accessibility -- 
 *  Originally options were fully disabled upon the max count being met, however this can be disorienting and misleading
 *    for screen readers users as they could make the max selections and then not see other options available to them
 *  The aria-live region is important for broadcasting specific notifications to the user about the number of selections
 *    currently zero, 1-n, and max count messages will be read.
 * Improvements --
 *   Implementing configruable aria-live region messages will enable question specific data to be read to users.
 *   Full implementation of the form to allow submission and verification of answers.
 */
export class HotspotMaxComponent implements OnInit {

  form: FormGroup;
  //Counts for max length
  selectedOptionlength : number = 0;
  maxOptions: number = 2;
  //Booleans for live region display
  maxLimitReached: boolean = false;
  noneSelected: boolean = false;

  //Configurable data for the question, can be expanded upon as needed. 
  // class matches the css class for the overlay
  // label is a hardcoded aria-label, this could be done using the index, optionslength, and name to be robust
  // name is the name and value passed through
  optionsData = [
    { id: 1, name: 'Maine', class: "hotspot-option-1", label: "Option 1 of 4 on Maine." },
    { id: 2, name: 'Virginia', class: "hotspot-option-2", label: "Option 2 of 4 on Virginia."  },
    { id: 3, name: 'California', class: "hotspot-option-3", label: "Option 3 of 4 on California."  },
    { id: 4, name: 'Texas', class: "hotspot-option-4", label: "Option 4 of 4 on Texas."  }
  ];

  //Reactive Form Boilerplate. Gets the array of option inputs.
  get optionsFormArray() {
    return this.form.controls.options as FormArray;
  }

  ngOnInit() {
  }

  
  //Reactive Form Boilerplate. Builds the reactive form in the component.
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      options: new FormArray([])
    });

    this.addCheckboxes();
  }
  //Reactive Form Boilerplate and helper.
  private addCheckboxes() {
    this.optionsData.forEach(() => this.optionsFormArray.push(new FormControl(false)));
  }

  /**
   * Click could be named better... 
   * runs business logic to check enforce max choice limitations and enables display of aria live region messages.
   */
  click(data) {
    this.maxLimitReached = false;
    this.noneSelected = false;
    if(this.selectedOptionlength === this.maxOptions){
      data.setValue(false);
    } 
    this.selectedOptionlength = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null).length;    
    if(this.selectedOptionlength === 0){
      this.noneSelected = true;
    }
    if(this.selectedOptionlength === this.maxOptions){
      this.maxLimitReached = true;
    }
  }
  /**
   * Unused functon would enable the reactive form submit.
   */
  submit() {
    const selectedOptionIds = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null);
  }

}
