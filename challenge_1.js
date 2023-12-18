// Challenge 1: Student Grade Generator 
// Author: Arnold .A.
// Date 17/12/2023


function StudentGradeGenerator(){

    // ===================================================== //
    // The function prompts the user to input student marks 
    // between 0 and 100, and outputs the corresponding grade.
    // ===================================================== //
    
    // load the prompt-sync module and call it
    const prompt = require('prompt-sync')();   

    // retrieve user input 
    let marks = parseFloat(prompt("Please input student marks: "));

    // compare mark and generate the output grade
    let grade;
    switch(true){
        case (marks < 40):
            grade = "E";
            break;
        case (marks >= 40 && marks < 50):
            grade = "D";
            break;
        case (marks >= 50 && marks < 60):
            grade = "C";
            break;
        case (marks >= 60 && marks < 80):
            grade = "B";
            break;
        case (marks >= 80 && marks <= 100):
            grade = "A";
            break;
        default:
            grade = "Invalid input! Please enter a mark between 0 and 100.";
    }

    console.log(grade);
}

StudentGradeGenerator();
