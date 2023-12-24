import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesSectionComponent } from './licenses-section.component';

describe('LicensesSectionComponent', () => {
  let component: LicensesSectionComponent;
  let fixture: ComponentFixture<LicensesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
