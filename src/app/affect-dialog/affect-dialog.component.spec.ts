import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectDialogComponent } from './affect-dialog.component';

describe('AffectDialogComponent', () => {
  let component: AffectDialogComponent;
  let fixture: ComponentFixture<AffectDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
