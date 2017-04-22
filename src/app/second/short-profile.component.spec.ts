import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortProfileComponent } from './short-profile.component';

describe('ShortProfileComponent', () => {
  let component: ShortProfileComponent;
  let fixture: ComponentFixture<ShortProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
