import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditorialesComponent } from './nuevo-editoriales.component';

describe('NuevoEditorialesComponent', () => {
  let component: NuevoEditorialesComponent;
  let fixture: ComponentFixture<NuevoEditorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEditorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
