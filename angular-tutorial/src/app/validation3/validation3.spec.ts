import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation3 } from './validation3';

describe('Validation3', () => {
  let component: Validation3;
  let fixture: ComponentFixture<Validation3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validation3],
    }).compileComponents();

    fixture = TestBed.createComponent(Validation3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
