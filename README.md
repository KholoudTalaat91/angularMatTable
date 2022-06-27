y# AngularMatTable

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

You will find an attached demo of 3 Levels hierarchical Table with expandable rows: 
  1.	Orders 
    a.	Packages 
      i.	Products 
 
## Features: 

1.	Filtering: text input on change event update table data and shows only the matched data. 
2.	Adding and removing data: using an array-based datasource to push and remove rows of data. 
3.	Expandable rows: to show orders, orders of packages, and packages of products. 
4.	dynamically template Table with columns defined using ngFor instead of statically written in the template. 
5.	Sorting: sorting on table header ascending and descending. 
6.	Pagination: add table pagination that defines a number of shown rows with no need to hit sever every time and support last and first not only next and previous. 
7.	Re-orderable columns: drag and drop on table header to reorder table columns 
8.	Event handlers and properties: Binding event handlers and properties to the table rows such as add classes on click and add row on click. 
9.	Selection: Adding a checkbox on columns headers to toggle between Select All and Deselect All and a checkbox on each row to select certain orders, packages, and products. 
10.	Sticky header: table header are always in the view port on scroll. 
 
## Usage: 

•	Download the attached file. 
•	In demo, folder Run npm install 
•	Run ng serve –open  

