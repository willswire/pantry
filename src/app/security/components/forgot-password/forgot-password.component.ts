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
  isBirthdayValid: Boolean;
  validatingBirthday: Boolean;
  wasResetSuccessful: Boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.isBirthdayValid = true;
    this.validatingBirthday = false;
    this.wasResetSuccessful = true;
   }

  ngOnInit() {
  }

  // Being lazy right now, this should actually validate the birthday
  validateBirthday(){
    return true;
  }

  resetPassword(){
    this.isBirthdayValid = this.validateBirthday();

    if(this.isBirthdayValid){
      this.authService.resetPassword(this.username, this.newPassword)
      .subscribe(result => {result.status == 201 ? this.router.navigate(['/login']) : this.wasResetSuccessful = false},
       error => {this.wasResetSuccessful = false});
    }
    
    else{
      this.wasResetSuccessful = false;
    }
  }
}
