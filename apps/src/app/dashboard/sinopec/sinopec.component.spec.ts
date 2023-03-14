import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinopecComponent } from './sinopec.component';

describe('SinopecComponent', () => {
  let component: SinopecComponent;
  let fixture: ComponentFixture<SinopecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinopecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinopecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
