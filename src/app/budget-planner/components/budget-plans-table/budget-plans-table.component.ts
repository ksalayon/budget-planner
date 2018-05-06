import { Component, OnInit } from '@angular/core';
import { BudgetPlanAdapterService } from '../../services/adapters/budget-plan-adapter.service';
import { BudgetPlan } from '../../models/budget-plan';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { BudgetIntervals } from '../../models/budget-entry';

@Component({
  selector: 'app-budget-plans-table',
  templateUrl: './budget-plans-table.component.html',
  styleUrls: ['./budget-plans-table.component.scss']
})
export class BudgetPlansTableComponent implements OnInit {

  public dataSource = new BudgetPlansDataSource(this.budgetPlanAdapter);
  public displayedColumns = ['startDate', 'endDate', 'range'];

  constructor(private budgetPlanAdapter: BudgetPlanAdapterService) { }

  ngOnInit() {
  }

}


export class BudgetPlansDataSource extends DataSource<any> {
  constructor(private budgetPlanAdapter: BudgetPlanAdapterService) {
    super();
  }

  connect(): Observable<BudgetPlan[]> {

    var subject = new BehaviorSubject([]);

    this.budgetPlanAdapter.getPlans().subscribe(
      plans => {
        const mappedPlans = plans.map(bp => {
          bp.startDate = moment(bp.startDate).format('Do MMMM YYYY');
          bp.endDate =  moment(bp.endDate).format('Do MMMM YYYY');
          return bp;
        });

        subject.next(mappedPlans);
      },
      e => {
        subject.error(e);
      },
      () => subject.complete()
    );

    return subject.asObservable();
  }
  disconnect() {}
}
