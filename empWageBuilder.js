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

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;

const WAGE_PER_HOUR = readLine.questionInt("\nEnter Wage Per Hour in dollar : ");
let userInput = readLine.questionInt("\nEnter 1 for Part Time  Or 2 for Full Time : ");
let empHrs = 0;

switch (userInput) {
    case IS_PART_TIME:
        console.log("\nEmployee is Present Part Time");
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        console.log("\nEmployee is Present Full Time");
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        console.log("\nInvalid Input");
        break;
}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("\nEmp Wage : " + empWage);