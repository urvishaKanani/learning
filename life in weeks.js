// input

function lifeInWeeks(age){
     
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining *52;
    var months = yearsRemaining *12;

    console.log("you have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

}

lifeInWeeks(12);

// output

you have 28470 days, 4056 weeks, and 936 months left.