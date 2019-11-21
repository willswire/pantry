import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string ;

  constructor(private _authSvc: AuthService, private router: Router) { }

  loginClick() {
    this._authSvc.login(this.username, this.password).subscribe(
      data => this.router.navigate(['/lists']),
      err => console.log(`Error: ${err}`)
    );
  }

  ngOnInit() {
    this.username = this.password = '';
  }

}
