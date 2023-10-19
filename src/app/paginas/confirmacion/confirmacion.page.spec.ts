import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { confirmacionPage } from './confirmacion.page';

describe('confirmacionPage', () => {
  let component: confirmacionPage;
  let fixture: ComponentFixture<confirmacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(confirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
