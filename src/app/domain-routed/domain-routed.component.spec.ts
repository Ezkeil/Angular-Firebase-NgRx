import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRoutedComponent } from './domain-routed.component';

describe('DomainRoutedComponent', () => {
  let component: DomainRoutedComponent;
  let fixture: ComponentFixture<DomainRoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainRoutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
