import { TestBed, inject } from '@angular/core/testing';

import { BudgetPlanService } from './budget-plan.service';

describe('BudgetPlanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetPlanService]
    });
  });

  it('should be created', inject([BudgetPlanService], (service: BudgetPlanService) => {
    expect(service).toBeTruthy();
  }));
});
