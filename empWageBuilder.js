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
const MAX_HRS_IN_MONTH = readLine.questionInt("\nEnter Maximum Working Hours in a Month : ");

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

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

/**
 * Function for calculating employee wage
 * @param {*} empHrs 
 * @returns 
 */
const calculateDailyWage = (empHrs) => {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS) {
    let userInput = readLine.questionInt("\nEnter 1 for Part Time  Or 2 for Full Time : ");
    totalWorkingDays++;
    let empHrs = getWorkingHours(userInput);
    totalEmpHrs = totalEmpHrs + empHrs;
    empDailyWageArr.push(calculateDailyWage(empHrs))
}

let empWage = calculateDailyWage(totalEmpHrs);

console.log("\nTotal Days : " + totalWorkingDays + ", Total Hrs : " + totalEmpHrs + ", Emp Wage : " + empWage);