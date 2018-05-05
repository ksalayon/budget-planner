import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { BudgetTemplateComponent } from './components/budget-template/budget-template.component';
import { BudgetLedgerComponent } from './components/budget-ledger/budget-ledger.component';
import { BudgetPlannerComponent } from './budget-planner.component';
import { BudgetEntryComponent } from './components/budget-entry/budget-entry.component';
import { BudgetPlanComponent } from './components/budget-plan/budget-plan.component';
import { BudgetPlanService } from  './services/budget-plan.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData }  from './services/vendor/in-memory-data';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryData, { dataEncapsulation: false }
    )
  ],
  declarations: [
    BudgetTemplateComponent,
    BudgetLedgerComponent,
    BudgetPlannerComponent,
    BudgetEntryComponent,
    BudgetPlanComponent
  ],
  exports: [
    BudgetPlannerComponent
  ],
  providers: [
    BudgetPlanService
  ],
  bootstrap:[BudgetPlannerComponent]
})
export class BudgetPlannerModule { }
