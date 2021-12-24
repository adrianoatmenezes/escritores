import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarTextoComponent } from './criar-texto.component';

describe('CriarTextoComponent', () => {
  let component: CriarTextoComponent;
  let fixture: ComponentFixture<CriarTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
