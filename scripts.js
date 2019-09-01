console.log('scripts.js loaded');
$(document).ready(onReady);

// employee constructor and array

function Employee(firstName, lastName, emplId, emplTitle, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.emplId = parseInt(emplId);
  this.emplTitle = emplTitle;
  this.salary = parseFloat(salary);
} // end Employee

let employees = [];
employees.push(new Employee('Jen', 'Barber', 4521, 'Team Lead', 80000));
employees.push(new Employee('Maurice', 'Moss', 8724, 'Support Team', 58000));
employees.push(new Employee('Roy', 'Smith', 9623, 'Quality Assurance', 48000));

// component functions



// document ready function

function onReady() {
  console.log('jQuery onReady loaded');
  console.log('employees:', employees);
  
}