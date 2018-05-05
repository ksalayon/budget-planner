import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { BudgetPlanAdapterService } from '../../services/adapters/budget-plan-adapter.service';

@Component({
  selector: 'app-budget-plan',
  templateUrl: './budget-plan.component.html',
  styleUrls: ['./budget-plan.component.scss']
})
export class BudgetPlanComponent implements OnInit {

  constructor(private budgetPlanAdapter: BudgetPlanAdapterService) { }

  ngOnInit() {
    forkJoin(
      this.budgetPlanAdapter.getPlans(),
      this.budgetPlanAdapter.getTemplates(),
      this.budgetPlanAdapter.getDefaultTemplate()
    ).subscribe(
      ([plans, templates, defaultTemplate]) => {
        console.log('the budget plans: ', plans);
        console.log('the budget templates: ', templates);
        console.log('the default template: ', defaultTemplate);
      },
      e => {
        console.log('error at fork: ', e);
      },
      () => console.log('completed forkJoin')
    )
  }

}
