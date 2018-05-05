import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetPlan } from '../../models/budget-plan';
import { BudgetTemplate } from '../../models/budget-template';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BudgetPlannerApiService {

  private budgetPlansUrl = 'api/budget_plans';
  private budgetTemplateUrl = 'api/budget_templates';

  constructor(private http: HttpClient) { }

  getPlans (): Observable<BudgetPlan[]> {
    return this.http.get<BudgetPlan[]>(this.budgetPlansUrl);
  }

  getTemplates (): Observable<BudgetTemplate[]> {
    return this.http.get<BudgetTemplate[]>(this.budgetTemplateUrl);
  }

  getDefaultTemplate(): Observable<BudgetTemplate[]> {
    const url = `${this.budgetTemplateUrl}/?default=true`;
    return this.http.get<BudgetTemplate[]>(url);
  }

}
