// Extra practice questions 
// Author: Arnold .A.
// Date 17/12/2023


// ===================================================== //
// Sort numbers in ascending order
// ===================================================== //

for (let i = 1; i < inpArr.length; i++){
    for (let j = 0; j < i; j++){
        if (inpArr[i] < inpArr[j]) {
            let x = inpArr[i];
            inpArr[i] = inpArr[j];
            inpArr[j] = x;
        }
    }
}

inpArr = [5,6,1,3,4,2];
console.log(inpArr);


// ===================================================== //
//  Staircase problem 
// ===================================================== //

function stair(n){

    // takes an integer and console logs a step shaped stair 
    // with the integer levels using the # character 

    for (let i = 0; i < n; i++) {
        let step = ' ';
        for (let j = 0; j < n; j++) {
            if (j <= i) {
                step += '#'
            } else {
                step += ' ';
            }
        }
    console.log(step);
    }
}

let n = 5;
stair(n);


// ===================================================== //
// volume of a Cylinder
// ===================================================== //


function volume(radius,height){

    // Computes volume of a Cylinder with four decimal places using object classes.
    // Volume of a cylinder : V = πr2h where r is the radius and 
    // h is the height of the cylinder.

    this.radius = radius;
    this.height = height;
    this.V = 3.14159 * (this.radius**2) * this.height;  
    console.log(parseFloat(this.V.toFixed(4)));
}

volume(7, 10);