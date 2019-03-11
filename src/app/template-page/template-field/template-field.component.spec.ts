import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFieldComponent } from './template-field.component';

describe('TemplateFieldComponent', () => {
  let component: TemplateFieldComponent;
  let fixture: ComponentFixture<TemplateFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
