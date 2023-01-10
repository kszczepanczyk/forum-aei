import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string = '';
  
  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }
  submitForm(){
    let authObs: Observable<User>;

    if (this.form.value.email && this.form.value.password) {
      authObs = this.authService.login(this.form.value.email, this.form.value.password);
    }
    else {
      return;
    }

    authObs.subscribe((response) => {
      this.router.navigate(['home']);
    },
    errorMessage => {
      this.error = 'Wrong password or email';
    })
    
  }


}
