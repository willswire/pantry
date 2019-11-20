import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string ;

  constructor(private _authSvc: AuthService) { }

  loginClick() {
    this._authSvc.login(this.username, this.password).subscribe(
      data => console.log(`Data: ${data}`),
      err => console.log(`Error: ${err}`)
    );
  }

  ngOnInit() {
    this.username = this.password = '';
  }

}
