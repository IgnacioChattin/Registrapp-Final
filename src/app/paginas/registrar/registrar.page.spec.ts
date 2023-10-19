import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { registrarPage } from './registrar.page';

describe('registrarPage', () => {
  let component: registrarPage;
  let fixture: ComponentFixture<registrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(registrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
