import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLibrosComponent } from './nuevo-libros.component';

describe('NuevoLibrosComponent', () => {
  let component: NuevoLibrosComponent;
  let fixture: ComponentFixture<NuevoLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
