// question
write a program that prints the numbers from 1 to 100. but for multiples of three print "Fizz" insted of the number and for the multipls of five print "Buzz". for numbers which are multiples of both three and five print "FizzBuzz".

// input

var output = [];
var count = 1;

function fizzBuzz(){

    while(count <= 100) {
    if (count % 3 === 0 && count % 5 ===0){
        output.push("FizzBuzz");
    }
    else if (count % 3 === 0) {
        output.push("Fizz");
    }
    else if (count % 5 === 0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }

    count++;
    }
    console.log(output);
}