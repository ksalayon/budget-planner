import { BudgetEntry } from './budget-entry';

export class BudgetTemplate {
  id: number;
  default: boolean;
  title: string;
  bill_entries: BudgetEntry[];
  income_entries: BudgetEntry[];
}
