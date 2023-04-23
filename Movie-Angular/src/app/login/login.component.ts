import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

export class Login {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: Login = {username: '', password: ''};

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(): void {
    let test = {id: 0}
    this.loginService.login(test).subscribe(x => console.log(x));
  }

}
