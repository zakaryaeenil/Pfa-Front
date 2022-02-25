import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfComponent } from './detail-prof.component';

describe('DetailProfComponent', () => {
  let component: DetailProfComponent;
  let fixture: ComponentFixture<DetailProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
