import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfsComponent } from './view-profs.component';

describe('ViewProfsComponent', () => {
  let component: ViewProfsComponent;
  let fixture: ComponentFixture<ViewProfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
