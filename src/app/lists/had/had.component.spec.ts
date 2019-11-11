import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadComponent } from './had.component';

describe('HadComponent', () => {
  let component: HadComponent;
  let fixture: ComponentFixture<HadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
