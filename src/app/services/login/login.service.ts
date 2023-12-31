import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, afterNextRender } from '@angular/core';
import { User } from 'src/app/entities/user';
import { ApiRouteService } from '../api-route/api-route.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private platformId = Inject(PLATFORM_ID);

  constructor(private http: HttpClient, private apiRoute: ApiRouteService) { }

  public get isLogged(): boolean {
    let authToken = false;
    try {
      authToken = localStorage.getItem('auth_token') !== null;
    } catch { }
    return authToken;
  }

  public logIn(user: User): void {
    try {
      this.http.post(this.apiRoute.route + 'auth/signin', user, { headers: this.httpHeaders }).subscribe((res: any) => {
        localStorage.setItem('auth_token', res.token);
      });
    } catch { }
  }

  public logOut(): void {
    try {
      localStorage.removeItem('auth_token');
    } catch { }
  }

  public get token(): string | null {
    let authToken = null;
    try {
      authToken = localStorage.getItem('auth_token');
    } catch { }
    return null;
  }
}
