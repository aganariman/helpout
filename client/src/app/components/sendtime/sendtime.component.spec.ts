/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendtimeComponent } from './sendtime.component';

describe('SendtimeComponent', () => {
  let component: SendtimeComponent;
  let fixture: ComponentFixture<SendtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
