/**
 * ****************************************************************************
 * Purpose: The purpose of this program to calculate daily employee wage.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 24-08-2021
 * ****************************************************************************
 */

var readLine = require('readline-sync');

const IS_ABSENT = 0;
const IS_PRESENT = 1;

const WAGE_PER_HOUR = readLine.questionInt("\nEnter Wage Per Hour in dollar : ");
let userInput = readLine.questionInt("\nEnter 0 Or 1 : ");
let empHrs = 0;

if (userInput == IS_ABSENT) {
    console.log("\nEmployee is Absent");
} else if (userInput == IS_PRESENT) {
    console.log("\nEmployee is PRESENT");
    empHrs = readLine.questionInt("\nEnter Working Hours : ");
} else {
    console.log("\nInvalid Input");
}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("\nEmp Wage : " + empWage);