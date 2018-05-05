import { Component, OnInit } from '@angular/core';
import { BudgetPlanService } from '../../services/adapters/budget-plan.service';


@Component({
  selector: 'app-budget-plan',
  templateUrl: './budget-plan.component.html',
  styleUrls: ['./budget-plan.component.scss']
})
export class BudgetPlanComponent implements OnInit {

  constructor(private budgetPlanService: BudgetPlanService) { }

  ngOnInit() {
    this.budgetPlanService.getPlans().subscribe(
      plans => {
        console.log('the budget plans: ', plans)
      }
    )
  }

}
