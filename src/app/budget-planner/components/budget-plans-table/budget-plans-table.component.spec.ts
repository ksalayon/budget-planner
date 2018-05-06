import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlansTableComponent } from './budget-plans-table.component';

describe('BudgetPlansTableComponent', () => {
  let component: BudgetPlansTableComponent;
  let fixture: ComponentFixture<BudgetPlansTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPlansTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPlansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
