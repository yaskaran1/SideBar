import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtSideBarComponent } from './rt-side-bar.component';

describe('RtSideBarComponent', () => {
  let component: RtSideBarComponent;
  let fixture: ComponentFixture<RtSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
