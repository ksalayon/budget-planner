enum EntryType {
  Debit = 'debit',
  Credit = 'credit'
}

enum BudgetIntervals {
  Weekly = 'weekly',
  Fornightly = 'fortnightly',
  Monthyl = 'monthly'
}

class BudgetEntry {
  id: number;
  title: string;
  value: number;
  entry_type: EntryType;
  paid_to: string;
  paid_amount: number;
  interval: BudgetIntervals
}

export {BudgetEntry, EntryType, BudgetIntervals};
