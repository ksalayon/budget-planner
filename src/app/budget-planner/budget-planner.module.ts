import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BudgetTemplateComponent } from './components/budget-template/budget-template.component';
import { BudgetLedgerComponent } from './components/budget-ledger/budget-ledger.component';
import { BudgetPlannerComponent } from './budget-planner.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
