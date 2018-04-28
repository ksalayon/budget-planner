import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetLedgerComponent } from './budget-ledger.component';

describe('BudgetLedgerComponent', () => {
  let component: BudgetLedgerComponent;
  let fixture: ComponentFixture<BudgetLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
