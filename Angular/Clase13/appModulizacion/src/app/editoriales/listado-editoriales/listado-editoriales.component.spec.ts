import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEditorialesComponent } from './listado-editoriales.component';

describe('ListadoEditorialesComponent', () => {
  let component: ListadoEditorialesComponent;
  let fixture: ComponentFixture<ListadoEditorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoEditorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
