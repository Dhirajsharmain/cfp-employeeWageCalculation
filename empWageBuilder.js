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

let userInput = readLine.question("\nEnter 0 Or 1 : ");

if (userInput == IS_ABSENT) {
    console.log("\nEmployee is Absent");
} else if (userInput == IS_PRESENT) {
    console.log("\nEmployee is PRESENT");
} else {
    console.log("\nInvalid Input");
}