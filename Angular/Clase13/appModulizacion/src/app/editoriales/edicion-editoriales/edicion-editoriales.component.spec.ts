import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEditorialesComponent } from './edicion-editoriales.component';

describe('EdicionEditorialesComponent', () => {
  let component: EdicionEditorialesComponent;
  let fixture: ComponentFixture<EdicionEditorialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionEditorialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionEditorialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
