// Challenge 3: Net Salary Calculator 
// Author: Arnold .A.
// Date 17/12/2023


// ===================================================== //
// The program calculates an individual’s Net Salary by 
// getting the inputs of basic salary and benefits. It 
// calculates the payee (i.e. Tax), NHIF Deductions, NSSF 
// Deductions, gross salary, and net salary. 
// ===================================================== //


function calculator(amount, percent){

    // Calculates percentage amount
    
    return (amount*percent)/100
}


function calcPAYEtax(total_income){

    // calculates the PAYE tax

    if (total_income <= 24000){
        return calculator(total_income, 10);
    }else if (total_income <= 32333){
        return calculator(total_income -24000, 25);
    }else if (total_income <= 500000){
        return calculator(total_income - 32333, 30);
    }else if (total_income <= 800000){
        return calculator(total_income - 500000, 32.5);
    }else{
        return calculator(total_income - 800000, 35);
    }
}


function NHIFDeductions(total_income){

    // Calculates and returns NHIF Deductions
    
    if (total_income <= 5,999){
        return 150;
    }else if (total_income <= 7999){
        return 300;
    }else if (total_income <= 11999){
        return 400;
    }else if (total_income <= 14999){
        return 500;
    }else if (total_income <= 19999){
        return 600;
    }else if (total_income <= 24999){
        return 750;
    }else if (total_income <= 29999){
        return 850;
    }else if (total_income <= 34999){
        return 900;
    }else if (total_income <= 39999){
        return 950;
    }else if (total_income <= 44999){
        return 1000;
    }else if (total_income <= 49999){
        return 1100;
    }else if (total_income <= 59999){
        return 1200;
    }else if (total_income <= 69999){
        return 1300;
    }else if (total_income <= 79999){
        return 1400;
    }else if (total_income <= 89999){
        return 1500;
    }else if (total_income <= 99999){
        return 1600;
    }else{
        return 1700;
    }
}


function NSSFDeductions(total_income){

    // Calculates and returns NSSF Deductions
    
    if (total_income < 18000){
        return 0;
    }else if (total_income >= 18000){
        deductions = 18000 * 0.06;     // 6% Tax Deduction on pensionable pay
        return deductions;
    }                   
}



// load the prompt-sync module and call it
const prompt = require("prompt-sync")();

// retrieve user for input
let grossPay = parseFloat(prompt("Gross Pay?: "));

// retrieve user for input
let benefit = parseFloat(prompt("Contribution Benefit: "));

// Compute Net Salary
let netSalary = grossPay - calcPAYEtax(grossPay) - benefit - NHIFDeductions(grossPay) - NSSFDeductions(grossPay)

// Log out results

console.log(`\nSummarry of your paymet slip\n`);

console.log(`Gross Pay: ${grossPay}`);
console.log(`Contribution Benefit: ${benefit}`);
console.log(`P.A.Y.E. Tax: ${calcPAYEtax(grossPay)}`);
console.log(`NHIF Deductions: ${NHIFDeductions(grossPay)}`);
console.log(`NSSF Deductions: ${NSSFDeductions(grossPay)}`);
console.log(`Net Salary: ${netSalary}`);
