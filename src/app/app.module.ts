import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BudgetPlannerModule } from './budget-planner/budget-planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BudgetPlannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
