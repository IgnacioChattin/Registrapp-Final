import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { verificarPage } from './verificar.page';

describe('verificarPage', () => {
  let component: verificarPage;
  let fixture: ComponentFixture<verificarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(verificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
