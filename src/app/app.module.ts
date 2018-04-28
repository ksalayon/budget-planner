import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BudgetPlannerModule } from './budget-planner/budget-planner.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BudgetPlannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
