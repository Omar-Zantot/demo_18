import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A0012Component } from './a001-2.component';

describe('A0012Component', () => {
  let component: A0012Component;
  let fixture: ComponentFixture<A0012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [A0012Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(A0012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
