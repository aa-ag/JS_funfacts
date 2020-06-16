import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrendaneichComponent } from './brendaneich.component';

describe('BrendaneichComponent', () => {
  let component: BrendaneichComponent;
  let fixture: ComponentFixture<BrendaneichComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrendaneichComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrendaneichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
