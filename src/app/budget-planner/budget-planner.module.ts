import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { BudgetTemplateComponent } from './components/budget-template/budget-template.component';
import { BudgetLedgerComponent } from './components/budget-ledger/budget-ledger.component';
import { BudgetPlannerComponent } from './budget-planner.component';
import { BudgetEntryComponent } from './components/budget-entry/budget-entry.component';
import { BudgetPlanComponent } from './components/budget-plan/budget-plan.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData }  from './services/vendor/in-memory-data';
import { BudgetPlannerApiService } from './services/api/budget-planner-api.service';
import { BudgetPlanAdapterService } from './services/adapters/budget-plan-adapter.service';
import { BudgetPlansTableComponent } from './components/budget-plans-table/budget-plans-table.component';

import { MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryData, { dataEncapsulation: false }
    ),
    MatTableModule
  ],
  declarations: [
    BudgetTemplateComponent,
    BudgetLedgerComponent,
    BudgetPlannerComponent,
    BudgetEntryComponent,
    BudgetPlanComponent,
    BudgetPlansTableComponent
  ],
  exports: [
    BudgetPlannerComponent,
    BudgetPlansTableComponent
  ],
  providers: [
    BudgetPlannerApiService,
    BudgetPlanAdapterService
  ],
  bootstrap:[BudgetPlannerComponent]
})
export class BudgetPlannerModule { }
