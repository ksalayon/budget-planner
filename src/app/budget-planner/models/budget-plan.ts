import { BudgetEntry, BudgetIntervals } from './budget-entry';
import { BudgetTemplate } from './budget-template';

export class BudgetPlan {
  id: string;
  range: BudgetIntervals;
  start_date: Date;
  template: BudgetTemplate;
  bill_entries: BudgetEntry[];
  income_entries: BudgetEntry[];
}
