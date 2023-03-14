import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnpcComponent } from './cnpc.component';

describe('CnpcComponent', () => {
  let component: CnpcComponent;
  let fixture: ComponentFixture<CnpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
