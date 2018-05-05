import { BudgetEntry } from './budget-entry';

export class BudgetTemplate {
  id: string;
  bill_entries: BudgetEntry[];
  income_entries: BudgetEntry[];
}
