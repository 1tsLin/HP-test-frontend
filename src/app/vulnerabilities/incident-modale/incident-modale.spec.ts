import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentModale } from './incident-modale';

describe('IncidentModale', () => {
  let component: IncidentModale;
  let fixture: ComponentFixture<IncidentModale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentModale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentModale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
