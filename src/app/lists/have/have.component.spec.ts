import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveComponent } from './have.component';

describe('HaveComponent', () => {
  let component: HaveComponent;
  let fixture: ComponentFixture<HaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
