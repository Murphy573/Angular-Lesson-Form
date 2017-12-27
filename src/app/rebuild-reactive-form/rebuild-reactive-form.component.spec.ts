import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildReactiveFormComponent } from './rebuild-reactive-form.component';

describe('RebuildReactiveFormComponent', () => {
  let component: RebuildReactiveFormComponent;
  let fixture: ComponentFixture<RebuildReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
