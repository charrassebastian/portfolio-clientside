import { Component } from '@angular/core';
import { SubdomainService } from '../services/subdomain/subdomain.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.css']
})
export class LegalNoticeComponent {
  readonly subdomain;
  constructor(private subdomainService: SubdomainService){
    this.subdomain = this.subdomainService.subdomain;
  }
}
