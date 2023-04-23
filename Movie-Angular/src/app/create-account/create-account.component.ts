import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

export class Account {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  account: Account = {name: '', username: '', email: '', password: ''};
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createAccount(): void {
    this.customerService.createAccount(this.account).subscribe( x => console.log(x));
  }

}
