# BudgetPlanner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Structure Blueprint
`app.module.ts
app.component.ts

modules
1) planner
	components
		budget-template
			- calculates how to divide equally on target credit frequency
			- target credit frequency property
			- input prop - disposable income, savings, total  income, total bills based on credit frequency, income - bill
			- uses bill-entry shared component
		budget-ledger
			- based on budget template but will - allow users to pay and set date of payment
			- uses bill-payment-entry shared component
		monthly-budget
		fornighty-budget
		income - source of debits
	pages
		planner.page.component.ts

	planner.service.ts - handles domain model objects for planner
	planner.module.ts
	planner.routes.ts

2) public
	pages
		home.page.component.ts
		about.page.components.ts
	public.service.ts
	public.module.ts
	public.routes.ts

3) settings


shared
	1) models
		bill
			bill - simple js class - domain model object
				- props, description, value, enum (reserve, payment), payment to?, due date?
			credit-frequencies-enum - yearly, monthly, fortnightly, weekly			bill interface

	2) components
		bill-entry -
		bill-payment-entry - `
