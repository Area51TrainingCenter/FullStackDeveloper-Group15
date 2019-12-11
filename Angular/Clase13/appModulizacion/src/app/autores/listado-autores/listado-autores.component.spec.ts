import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAutoresComponent } from './listado-autores.component';

describe('ListadoAutoresComponent', () => {
  let component: ListadoAutoresComponent;
  let fixture: ComponentFixture<ListadoAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
