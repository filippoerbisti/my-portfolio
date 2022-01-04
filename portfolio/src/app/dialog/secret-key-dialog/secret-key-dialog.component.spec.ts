import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretKeyDialogComponent } from './secret-key-dialog.component';

describe('SecretKeyDialogComponent', () => {
  let component: SecretKeyDialogComponent;
  let fixture: ComponentFixture<SecretKeyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretKeyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretKeyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
