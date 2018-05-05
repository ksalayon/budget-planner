import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetEntryComponent } from './budget-entry.component';

describe('BudgetEntryComponent', () => {
  let component: BudgetEntryComponent;
  let fixture: ComponentFixture<BudgetEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
