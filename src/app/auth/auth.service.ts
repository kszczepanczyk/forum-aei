import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';



/*TODO
  make authentication based on jwt
*/
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStatus$: Observable<boolean>;

  private _authStatusSource: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router, private authApi: AuthApiService) { 
    this.authStatus$ = this._authStatusSource.asObservable();
    this.getIsLoggedIn().subscribe(email => {
      this._authStatusSource.next(!!email);
    })
  }

  login(email: string, password: string) {
    return this.authApi.login(email,password).pipe(
      tap((response) => {
        this._authStatusSource.next(true);
        localStorage.setItem('email',response.email);
        this.router.navigate(['home']);
        console.log(response);
      })
    )
  }

  logout(): void{
    this._authStatusSource.next(false);
    localStorage.removeItem('email');
  }

  getIsLoggedIn(): Observable<string | null> {
    const email = localStorage.getItem('email')
    if( email == null){
      this.logout()
      return of(null);
    }
    return of(email);
  }
}
