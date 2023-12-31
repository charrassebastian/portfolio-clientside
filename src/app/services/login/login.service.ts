import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, afterNextRender } from '@angular/core';
import { User } from 'src/app/entities/user';
import { ApiRouteService } from '../api-route/api-route.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private apiRoute: ApiRouteService) { }

  public get isLogged(): boolean {
    let isAuthTokenStored = false;
    try {
      const authToken = localStorage.getItem('auth_token');
      isAuthTokenStored = authToken !== null;
    } catch { }
    return isAuthTokenStored;
  }

  public logIn(user: User): void {
    try {
      this.http.post(this.apiRoute.route + 'auth/signin', user, { headers: this.httpHeaders }).subscribe((res: any) => {
        const token = res.token;
        localStorage.setItem('auth_token', token);
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
    return authToken;
  }
}
