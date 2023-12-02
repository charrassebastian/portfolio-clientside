import { Component, Input } from '@angular/core';
import { Person } from 'src/app/entities/person';
import { SubdomainService } from 'src/app/services/subdomain/subdomain.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  private _person!: Person;
  readonly subdomain;
  constructor(private subdomainService: SubdomainService){
    this.subdomain = this.subdomainService.subdomain;
  }
  public get person(): Person {
    return this._person;
  }

  @Input()
  public set person(person: Person) {
    this._person = person;
  }
}
