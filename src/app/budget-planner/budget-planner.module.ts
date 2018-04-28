import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetTemplateComponent } from './components/budget-template/budget-template.component';
import { BudgetLedgerComponent } from './components/budget-ledger/budget-ledger.component';
import { BudgetPlannerComponent } from './budget-planner.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BudgetTemplateComponent,
    BudgetLedgerComponent,
    BudgetPlannerComponent
  ],
  exports: [
    BudgetPlannerComponent
  ],
  bootstrap:[BudgetPlannerComponent]
})
export class BudgetPlannerModule { }
