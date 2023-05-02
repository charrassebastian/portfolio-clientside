import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiRouteService {
  private _route: string = 'https://apiyoprogramo.sebastiancharras.com/api/';

  constructor() {}

  public get route(): string {
    return this._route;
  }
}
