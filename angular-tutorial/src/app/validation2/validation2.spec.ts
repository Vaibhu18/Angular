import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Validation2 } from './validation2';

describe('Validation2', () => {
  let component: Validation2;
  let fixture: ComponentFixture<Validation2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Validation2],
    }).compileComponents();

    fixture = TestBed.createComponent(Validation2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
