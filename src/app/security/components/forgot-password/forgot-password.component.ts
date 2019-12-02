import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  birthday: Date;
  newPassword: String;
  username: String;
  wasResetSuccessful: Boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.wasResetSuccessful = true;
   }

  ngOnInit() {
  }

  resetPassword(){
    this.authService.resetPassword(this.username, this.newPassword, this.birthday)
    .subscribe(result => {
      if(result.status == 201) {
        this.router.navigate(['/login'])
      }  
      else { 
        this.wasResetSuccessful = false
      }
    },
    error => {this.wasResetSuccessful = false});
  }
}
