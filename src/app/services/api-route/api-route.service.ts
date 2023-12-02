import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'http://localhost:8087/api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
