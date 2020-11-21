import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { Activity1Component } from './activity1.component';

describe('Activity1Component', () => {
  let component: Activity1Component;
  let fixture: ComponentFixture<Activity1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Activity1Component ],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Activity1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
