import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLibrosComponent } from './listado-libros.component';

describe('ListadoLibrosComponent', () => {
  let component: ListadoLibrosComponent;
  let fixture: ComponentFixture<ListadoLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
