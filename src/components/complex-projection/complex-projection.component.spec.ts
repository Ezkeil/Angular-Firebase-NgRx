import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexProjectionComponent } from './complex-projection.component';

describe('ComplexProjectionComponent', () => {
  let component: ComplexProjectionComponent;
  let fixture: ComponentFixture<ComplexProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexProjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
