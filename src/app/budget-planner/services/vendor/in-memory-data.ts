import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EntryType, BudgetIntervals } from '../../models/budget-entry';
export class InMemoryData implements InMemoryDbService {

  createDb() {
    const bill_entries = [
      { id: 1, title: 'Weekly Reserve for bills', description: '', value: 100, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Lunch Allowance', description: '', value: 150, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Groceries', description: '', value: 1000, entry_type: EntryType.Credit, paid_to: 'Anne', paid_amount: 0},
      { id: 1, title: 'Mortgage', description: '', value: 3000, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Life Insurance', description: '', value: 1000, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'House Insurance', description: '', value: 500, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Content Insurance', description: '', value: 300, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Petrol', description: '', value: 500, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Reserve for rates', description: '', value: 100, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Credit Card', description: '', value: 300, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
      { id: 1, title: 'Savings', description: '', value: 10000, entry_type: EntryType.Credit, paid_to: '', paid_amount: 0},
    ];

    const income_entries = [
      { id: 1, title: `Dad's Salary`, description: `Dad's fortnightly salary`, value: 100000, entry_type: EntryType.Debit, paid_to: '', paid_amount: 0},
      { id: 1, title: `Mom's Salary`, description: `Mom's fortnightly salary`, value: 100000, entry_type: EntryType.Debit, paid_to: '', paid_amount: 0},
    ]

    const budget_templates = [
      { id:1, bill_entries: bill_entries, income_entries: income_entries}
    ];

    const budget_plans = [{
      id: 1,
      range: BudgetIntervals.Fornightly,
      start_date: `2018-05-09T00:00:00`,
      template: budget_templates[0],
      bill_entries: [],
      income_entries: []
    }];

    return {budget_plans, budget_templates};
  }

}
