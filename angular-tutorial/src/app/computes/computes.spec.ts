import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Computes } from './computes';

describe('Computes', () => {
  let component: Computes;
  let fixture: ComponentFixture<Computes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Computes],
    }).compileComponents();

    fixture = TestBed.createComponent(Computes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
