import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedlgComponent } from './imagedlg.component';

describe('ImagedlgComponent', () => {
  let component: ImagedlgComponent;
  let fixture: ComponentFixture<ImagedlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagedlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
