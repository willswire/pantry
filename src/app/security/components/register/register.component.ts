import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs/operators';

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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  registerUser(){
    this.authService.register(this.username, this.password, this.name, this.gender, this.birthday)
    .subscribe();
  }

}
