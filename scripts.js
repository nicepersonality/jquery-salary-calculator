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

function listEmployees(roster) {
  // Replace the current contents of the employee table with the data
  // supplied to the function (an array of Employees).
  // Also, calculate the monthly total salary load.
  let monthlySalary = 0;
  $('#employeeTable tbody').empty();
  for (employee of roster) {
    let $tr = $('<tr></tr>');
    $tr.append(`<td class="colFirstName">${employee.firstName}</td>`);
    $tr.append(`<td class="colLastName">${employee.lastName}</td>`);
    $tr.append(`<td class="colEmplId">${employee.emplId}</td>`);
    $tr.append(`<td class="colEmplTitle">${employee.emplTitle}</td>`);
    $tr.append(`<td class="colSalary">${employee.salary}</td>`);
    $tr.append(`<td><button class="deleteRow">Delete</button></td>`);
    $('#employeeTable tbody').append($tr);
    monthlySalary += (employee.salary) / 12;
    console.log('monthlySalary', monthlySalary);
    
  } // end for
  $('#monthlyTotal').text(`${parseInt(monthlySalary)}`);
  if (monthlySalary > 20000) {
    $('#monthlyTotal').addClass('warning');
  } else {
    $('#monthlyTotal').removeClass('warning');
  } // end if monthly total check
} // end listEmployees

// document ready function

function onReady() {
  console.log('jQuery onReady loaded');
  console.log('employees:', employees);
  listEmployees(employees);
}