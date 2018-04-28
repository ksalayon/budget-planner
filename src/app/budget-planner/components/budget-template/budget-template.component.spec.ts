import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTemplateComponent } from './budget-template.component';

describe('BudgetTemplateComponent', () => {
  let component: BudgetTemplateComponent;
  let fixture: ComponentFixture<BudgetTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
