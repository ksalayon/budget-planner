import { BudgetEntry, BudgetIntervals } from './budget-entry';
import { BudgetTemplate } from './budget-template';
import * as moment from 'moment';

export class BudgetPlan {
  id: string;
  range: BudgetIntervals;
  startDate: string;
  endDate: string;
  template: BudgetTemplate;
  billEntries: BudgetEntry[];
  incomeEntries: BudgetEntry[];

  // get endDate(): String {
  //   let endDate = '';
  //   switch(this.range) {
  //     case BudgetIntervals.Weekly:
  //       endDate = moment(this.startDate).add(1, 'week').format();
  //     break;
  //
  //     case BudgetIntervals.Fornightly:
  //       endDate = moment(this.startDate).add(2, 'weeks').format();
  //     break;
  //
  //     case BudgetIntervals.Monthly:
  //       endDate = moment(this.startDate).add(1, 'month').format();
  //     break;
  //   }
  //   return endDate;
  // }
}
