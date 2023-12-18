// Challenge 2: Speed Detector 
// Author: Arnold .A.
// Date 17/12/2023


function SpeedDetector(){

    // ===================================================== //
    // The program takes the speed of a car as input e.g 80. 
    // If the speed is less than 70, it prints “Ok”.
    // Otherwise, for every 5 km/s above the speed limit (70), 
    // it give the driver one demerit point and prints the 
    // total number of demerit points.
    // ===================================================== //

    // load the prompt-sync module and call it
    const prompt = require("prompt-sync")();

    // retrieve user for input
    let speed = parseInt(prompt("Please enter the speed: "));

    if (speed < 70){

        console.log("Ok");

    }else if(speed >= 70){
        
        // obtain the difference from the limit
        let difference = speed - 70;

        // obtain the increment value (multiple of 5)
        // round the number down to the immediate smallest integer
        let increment = Math.floor(difference/5);  

        if (increment > 12){
            console.log("License suspended");
        }else{
            console.log(`Points: ${increment}`);
        }

    }else{

        console.log("Invalid Entry. Provide the speed as input");

    }
}

SpeedDetector();
