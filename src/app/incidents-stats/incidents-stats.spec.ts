import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentsStats } from './incidents-stats';

describe('IncidentsStats', () => {
  let component: IncidentsStats;
  let fixture: ComponentFixture<IncidentsStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentsStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentsStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
