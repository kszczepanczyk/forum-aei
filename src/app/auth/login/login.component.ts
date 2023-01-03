import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  constructor(private authService: AuthService, private router: Router) { }

  submitForm(){
    if (this.form.value.email && this.form.value.password) {
      this.authService.login(this.form.value.email, this.form.value.password).subscribe((response) => {
        this.router.navigate(['/home']);
      })
    }
    else {
      return;
    }
    
  }


}
