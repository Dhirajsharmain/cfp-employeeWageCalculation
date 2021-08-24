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
const NO_OF_WORKING_DAYS = readLine.questionInt("\nEnter Days in a Month : ");
let empHrs = 0;

/**
 * Function for getting employee working hours for part time and full time
 * @param {*} userInput : user input 1 for Part Time  Or 2 for Full Time
 * @returns : PART_TIME_HOURS or FULL_TIME_HOURS
 */
function getWorkingHours(userInput) {
    switch (userInput) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

for (let i = 0; i < NO_OF_WORKING_DAYS; i++) {
    let userInput = readLine.questionInt("\nEnter 1 for Part Time  Or 2 for Full Time : ");
    empHrs += getWorkingHours(userInput);
}

let empWage = empHrs * WAGE_PER_HOUR;

console.log("\nEmp Wage : " + empWage);