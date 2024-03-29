import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private loginService: LoginService) {}

  public get headers(): HttpHeaders {
    let httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    const bearer = 'Bearer ' + this.loginService.token;
    if (this.loginService.isLogged) {
      httpHeaders = httpHeaders.append(
        'Authorization',
        bearer
      );
    }
    return httpHeaders;
  }
}
