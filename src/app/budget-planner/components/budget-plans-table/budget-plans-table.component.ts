import { Component, OnInit } from '@angular/core';
import { BudgetPlanAdapterService } from '../../services/adapters/budget-plan-adapter.service';
import { BudgetPlan } from '../../models/budget-plan';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-budget-plans-table',
  templateUrl: './budget-plans-table.component.html',
  styleUrls: ['./budget-plans-table.component.scss']
})
export class BudgetPlansTableComponent implements OnInit {

  public dataSource = new BudgetPlansDataSource(this.budgetPlanAdapter);
  public displayedColumns = ['startDate', 'range'];

  constructor(private budgetPlanAdapter: BudgetPlanAdapterService) { }

  ngOnInit() {
  }

}


export class BudgetPlansDataSource extends DataSource<any> {
  constructor(private budgetPlanAdapter: BudgetPlanAdapterService) {
    super();
  }
  connect(): Observable<BudgetPlan[]> {
    return this.budgetPlanAdapter.getPlans();
  }
  disconnect() {}
}
