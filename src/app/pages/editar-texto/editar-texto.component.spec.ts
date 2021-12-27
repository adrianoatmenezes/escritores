import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTextoComponent } from './editar-texto.component';

describe('EditarTextoComponent', () => {
  let component: EditarTextoComponent;
  let fixture: ComponentFixture<EditarTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
