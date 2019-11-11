import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantComponent } from './want.component';

describe('WantComponent', () => {
  let component: WantComponent;
  let fixture: ComponentFixture<WantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
