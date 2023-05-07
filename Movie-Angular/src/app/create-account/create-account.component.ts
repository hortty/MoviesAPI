import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

export class Account {
  name: string;
  phone: string;
  address: string;
  age: number;
  userId: number;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  accountForm: FormGroup;
  account: Account;
  formErrors = {
    'name': '',
    'phone': '',
    'address': '',
    'age': ''
  };

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.accountForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required]
    });
    this.accountForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.accountForm) {
      return;
    }
    const form = this.accountForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'phone': {
      'required': 'phone is required.'
    },
    'address': {
      'required': 'address is required.',
    },
    'age': {
      'required': 'age is required.'
    }
  };

  createAccount() {
    this.account = this.accountForm.value;
    this.account.userId = 1;

    if(this.accountForm.valid)
    {
      this.customerService.createAccount(this.account).subscribe( x => console.log(x));
    }
    else
    {
      this.accountForm.markAllAsTouched();
      this.accountForm.updateValueAndValidity();
    }
  }
}
