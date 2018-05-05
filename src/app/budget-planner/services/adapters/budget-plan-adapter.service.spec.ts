import { TestBed, inject } from '@angular/core/testing';

import { BudgetPlanAdapterService } from './budget-plan-adapter.service';

describe('BudgetPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetPlanAdapterService]
    });
  });

  it('should be created', inject([BudgetPlanAdapterService], (service: BudgetPlanAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
