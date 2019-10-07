import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: '',
      lastName: {value: 'n/a', disabled: true},
      email: '',
      sendCatalog: true
    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }

  populateTestDataWithSetValue(): void {
    this.customerForm.setValue({
      firstName: 'Mile',
      lastName: 'Kuzma',
      email: 'aintnobody@here.com',
      sendCatalog: false
    });
  }

  populateTestDataWithPatchValue(): void {
    this.customerForm.patchValue({
      firstName: 'Nike',
      lastName: 'Puma',
      sendCatalog: false
    });
  }
}
