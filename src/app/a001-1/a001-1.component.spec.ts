import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A0011Component } from './a001-1.component';

describe('A0011Component', () => {
  let component: A0011Component;
  let fixture: ComponentFixture<A0011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A0011Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A0011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
