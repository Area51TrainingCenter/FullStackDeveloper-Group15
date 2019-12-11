import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAutoresComponent } from './nuevo-autores.component';

describe('NuevoAutoresComponent', () => {
  let component: NuevoAutoresComponent;
  let fixture: ComponentFixture<NuevoAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
