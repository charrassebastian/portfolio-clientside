import { Component } from '@angular/core';

@Component({
  selector: 'app-licenses-section',
  templateUrl: './licenses-section.component.html',
  styleUrls: ['./licenses-section.component.css']
})
export class LicensesSectionComponent {
  shouldShowLicenses: Boolean = false;

  onToggle(): void {
    this.shouldShowLicenses = !this.shouldShowLicenses;
  }
}
