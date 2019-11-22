import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router'
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  name: string;
  gender: string;
  birthday: Date;
  registering = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(){
    this.registering = true;
    this.authService.register(this.username, this.password, this.name, this.gender, this.birthday)
    .pipe(catchError(err => {
      this.registering = false;
      return throwError(err);
    })).subscribe(
      data => this.router.navigate(['/lists']),
      err => function(){
        this.registering = false;
        console.log(`Error: ${err}`);
      }
    );
  }

}
