import { TestBed, inject } from '@angular/core/testing';

import { BudgetPlannerApiService } from './budget-planner-api.service';

describe('BudgetPlannerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BudgetPlannerApiService]
    });
  });

  it('should be created', inject([BudgetPlannerApiService], (service: BudgetPlannerApiService) => {
    expect(service).toBeTruthy();
  }));
});
