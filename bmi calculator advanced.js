
 // input

function bmiCalculator(weight,height){
    var bmi = weight/Math.pow(height,2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65,1.8);
console.log(bmi); 


if(bmi > 24.9){
   alert ("your bmi is <bmi>, so you are over weight.")

}
if(bmi > 18.5 && bmi <= 24.9){
    alert ("your bmi is <bmi>, so you have a normal weight.")
 
}
if(bmi <= 18.5){
    alert ("your bmi is <bmi>, so you are under weight.")
 
 }
 
//  output
"your bmi is <bmi>, so you have a normal weight."

