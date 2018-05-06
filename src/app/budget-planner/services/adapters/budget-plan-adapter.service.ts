import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetPlan } from '../../models/budget-plan';
import { BudgetPlannerApiService } from '../api/budget-planner-api.service';
import { Subscription } from 'rxjs/Subscription';
import { BudgetTemplate } from '../../models/budget-template';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import { BudgetIntervals } from '../../models/budget-entry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BudgetPlanAdapterService {

  private budgetPlanUrl = 'api/budget_plans';

  constructor(private budgetPlannerApi: BudgetPlannerApiService) { }

  getPlans (): Observable<BudgetPlan[]> {
    const subject = new BehaviorSubject([]);
    this.budgetPlannerApi.getPlans()
      .subscribe(
        plans => {
          let mappedPlans = [...plans];
          // TODO: Ceate a separate util service to convert dates to momentjs types
          mappedPlans = mappedPlans.map(bp => {
            let endDate = '';
            switch(bp.range) {
              case BudgetIntervals.Weekly:
                endDate = moment(bp.startDate).add(1, 'week').format();
              break;

              case BudgetIntervals.Fornightly:
                endDate = moment(bp.startDate).add(2, 'weeks').format();
              break;

              case BudgetIntervals.Monthly:
                endDate = moment(bp.startDate).add(1, 'month').format();
              break;
            }
            bp.endDate = endDate;
            bp.startDate = moment(bp.startDate).format();
            return bp;
          });

          subject.next(plans);
        },
        e => {
          subject.error(e);
        },
        () => subject.complete()
      );

    return subject.asObservable();
  }

  getTemplates (): Observable<BudgetTemplate[]> {
    return this.budgetPlannerApi.getTemplates()
      .pipe(
        tap(templates => this.log(`fetched templates`)),
        catchError(this.handleError('getTemplates', []))
      );
  }

  getDefaultTemplate (): Observable<BudgetTemplate> {
    var subject = new BehaviorSubject(new BudgetTemplate());

    this.budgetPlannerApi.getDefaultTemplate()
      .subscribe(
        templates => {
          subject.next(templates[0]);
          subject.complete();
        },
        e => subject.error(e)
      );

      return subject.asObservable();
  }

  private log(message: String): void {
    //TODO: Create better logging service
    console.log(message);
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
