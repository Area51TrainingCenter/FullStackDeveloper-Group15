import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAutoresComponent } from './edicion-autores.component';

describe('EdicionAutoresComponent', () => {
  let component: EdicionAutoresComponent;
  let fixture: ComponentFixture<EdicionAutoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionAutoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
