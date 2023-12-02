import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubdomainService {
  readonly subdomain;
  constructor() { 
    const domain = window.location.hostname.split(".");
    this.subdomain = (domain && domain.length > 0) ? domain[0] : "";
  }
}
